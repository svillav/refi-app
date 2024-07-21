const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

// URL de la página de refiticket donde están listados los eventos
const url = 'https://refiticket.com/';

// Ruta donde guardar el JSON actualizado
const jsonPath = path.join(__dirname, 'src', 'eventos.json');
// Directorio donde guardar las imágenes
const imagesDir = path.join(__dirname, 'src', 'components', 'assets', 'eventos');

// Función para descargar imágenes
async function downloadImage(url, imagePath) {
    const response = await axios({
        url,
        responseType: 'stream',
    });
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(imagePath))
            .on('finish', resolve)
            .on('error', reject);
    });
}

// Función para analizar el HTML y extraer la información de los eventos
async function scrapeEvents() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const events = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.event')).map(event => ({
            title: event.querySelector('.event-title').innerText,
            date: event.querySelector('.event-date').innerText,
            price: event.querySelector('.event-price').innerText,
            imageUrl: event.querySelector('.event-image').src,
        }));
    });

    await browser.close();

    return events;
}

// Función para guardar los datos en un archivo JSON
async function saveEvents(events) {
    await fs.ensureDir(path.dirname(jsonPath));
    await fs.writeJson(jsonPath, events, { spaces: 4 });
}

// Ejecutar el proceso de scraping, descarga de imágenes, y guardado
async function main() {
    const events = await scrapeEvents();

    await fs.ensureDir(imagesDir);
    for (const event of events) {
        const imageName = path.basename(event.imageUrl);
        const imagePath = path.join(imagesDir, imageName);
        await downloadImage(event.imageUrl, imagePath);
        event.image = imageName;
    }

    await saveEvents(events);
}

main().catch(console.error);

const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

const baseUrl = 'https://refiticket.ar'; 

const jsonPath = path.join(__dirname, 'src', 'eventos.json');
const imagesDir = path.join(__dirname, 'src', 'components', 'assets', 'eventos');

async function scrapeEvents() {
    try {
        // Obtención de eventos desde el endpoint
        const response = await axios.get('https://refiticket.ar/obtener_eventos');
        const events = response.data;
        
        // Guardado del JSON
        await fs.writeJson(jsonPath, events, { spaces: 2 });

        // Descarga de imágenes
        for (const event of events.eventos) {
            const relativeImagePath = event.imagen_home;
            if (relativeImagePath) {
                const imageUrl = new URL(relativeImagePath, baseUrl).href;
                console.log("Descargando imagen de:", imageUrl);

                const viewSource = await axios.get(imageUrl, { responseType: 'arraybuffer' });
                const imagePath = path.join(imagesDir, `${event.slug}.jpeg`);
                await fs.writeFile(imagePath, viewSource.data);
            }
        }
    } catch (error) {
        console.error('Error al obtener o procesar los eventos:', error);
    }
}

scrapeEvents();

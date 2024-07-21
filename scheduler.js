const cron = require('node-cron');
const { exec } = require('child_process');

// Programa la tarea para que se ejecute diariamente a las 2:00 AM
cron.schedule('0 2 * * *', () => {
    console.log('Iniciando el scraping de eventos...');
    exec('npm run scrape-events', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el script de scraping: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
});

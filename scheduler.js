const cron = require('node-cron');
const { exec } = require('child_process');

console.log("Scheduler started. Waiting for next puzzle generation");

cron.schedule(' * * * * *', () => {
    console.log("Generating new puzzle...");

    exec(`"${process.execPath}" generatePuzzle.js`, (error, stdout, stderr) => {
        if(error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
});
import fs from 'fs';

// This function reads the file synchronously once at startup
export function loadConfig() {
    try {
        const data = fs.readFileSync('./config.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error loading config.json! Check if file exists.", err);
        return null;
    }
}
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontUrl = 'https://unpkg.com/boxicons@2.1.4/fonts/boxicons.woff2';
const fontPath = path.join(__dirname, 'public', 'assets', 'fonts', 'boxicons.woff2');

// Asegurarse de que el directorio existe
const dir = path.dirname(fontPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Descargar el archivo
https.get(fontUrl, (response) => {
  response.pipe(fs.createWriteStream(fontPath));
  console.log('Font file downloaded successfully!');
}).on('error', (err) => {
  console.error('Error downloading font file:', err.message);
}); 
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/info,json', function (req, res) {
  res.sendFile('/info.json');
});

export default app;

// run with vercel .dev
import express from 'express'

const port = 3000;
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => res.sendFile('index.html'));
app.get('/info.json', (req, res) => res.sendFile('/info.json'));

app.listen(port, () => console.log(`Portfolio on port ${port}`));

export default app;

// npx tsx server.ts
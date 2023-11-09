import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(cors());

app.post('/api', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await fetch('https://cleanuri.com/api/v1/shorten?url=${url}');
        if (response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al cargar datos:', error);
        res.status(500).json({ error: 'Error al cargar datos' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor intermedio en ejecución en el puerto ${PORT}`);
});
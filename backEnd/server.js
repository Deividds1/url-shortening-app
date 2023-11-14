import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api', async (req, res) => {
    try {
        const apiUrl = 'https://cleanuri.com/api/v1/shorten';
        const { url } = req.body;

        const cleanUriResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `url=${encodeURIComponent(url)}`,
        });

        if (!cleanUriResponse.ok) {
            throw new Error(`HTTP error! status: ${cleanUriResponse.status}`);
        }

        const cleanUriData = await cleanUriResponse.json();
        res.json(cleanUriData);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js
import express from 'express';
import fetch from 'node-fetch';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/fastcom-data', async (req, res) => {
    try {
      const response = await fetch(
        'https://api.fast.com/netflix/speedtest?https=true&token=YOUR_TOKEN&urlCount=5'
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});

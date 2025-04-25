// server.js

require('dotenv').config();
const express = require('express');
const next = require('next');
const http = require('http');
const WebSocket = require('ws');

const port = process.env.DB_PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();
  const server = http.createServer(expressApp);
  const wss = new WebSocket.Server({ server, path: '/ws' });

  console.log(port);

  // Configuración de WebSocket…
  wss.on('connection', ws => {
    console.log('Cliente conectado');
    const interval = setInterval(() => {
      const data = {
        heartRate: Math.floor(Math.random() * 40) + 60,
        oxygen: Math.floor(Math.random() * 10) + 90,
        timestamp: new Date().toISOString(),
      };
      console.log(data);
      ws.send(JSON.stringify(data));
    }, 2000);
    // ws.on('close', () => clearInterval(interval));
  });

  // Captura todas las rutas con regex (opción 1)
  expressApp.all(/.*/, (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`🚀 Server ready on http://localhost:${port}`);
  });
});

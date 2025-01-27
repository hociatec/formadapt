const express = require('express');
    const http = require('http');
    const WebSocket = require('ws');
    const authRoutes = require('./routes/auth');
    const favoritesRoutes = require('./routes/favorites');
    const notificationsRoutes = require('./routes/notifications');
    const learningPathRoutes = require('./routes/learningPath');

    const app = express();
    const server = http.createServer(app);
    const wss = new WebSocket.Server({ server });

    app.use(express.json());

    app.use('/api/auth', authRoutes);
    app.use('/api/favorites', favoritesRoutes);
    app.use('/api/notifications', notificationsRoutes);
    app.use('/api/learning-path', learningPathRoutes);

    wss.on('connection', (ws) => {
      console.log('Client connecté');

      ws.on('message', (message) => {
        console.log('Message reçu:', message);
        ws.send(`Serveur a reçu: ${message}`);
      });

      ws.on('close', () => {
        console.log('Client déconnecté');
      });
    });

    const PORT = 5000;
    server.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });

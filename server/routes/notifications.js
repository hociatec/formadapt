const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {
      // Simulate fetching notifications
      res.json([
        { id: 1, message: 'Bienvenue sur FormAdapt !', type: 'success', read: false },
        { id: 2, message: 'Un nouveau cours est disponible !', type: 'info', read: false },
      ]);
    });

    module.exports = router;

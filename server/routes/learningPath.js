const express = require('express');
    const router = express.Router();

    router.post('/quiz', (req, res) => {
      // Simulate saving quiz data
      const { selectedSoftware, level, goals } = req.body;
      console.log('Quiz data received:', { selectedSoftware, level, goals });
      res.json({ message: 'Quiz data saved successfully' });
    });

    router.get('/dashboard', (req, res) => {
      // Simulate fetching dashboard data
      res.json({
        progress: [
          { name: 'Cours 1', progress: 20 },
          { name: 'Cours 2', progress: 50 },
          { name: 'Cours 3', progress: 80 },
          { name: 'Cours 4', progress: 100 },
        ],
        nextSteps: [
          'Continuer le cours 2',
          'Commencer le cours 3',
        ],
      });
    });

    module.exports = router;

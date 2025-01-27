const express = require('express');
    const router = express.Router();

    router.post('/login', (req, res) => {
      // Simulate login
      const { email, password } = req.body;
      if (email === 'test@example.com' && password === 'password') {
        res.json({ token: 'fake-jwt-token', user: { id: 1, email: email } });
      } else {
        res.status(401).json({ message: 'Identifiants invalides' });
      }
    });

    router.post('/register', (req, res) => {
      // Simulate register
      const { email } = req.body;
      res.json({ token: 'fake-jwt-token', user: { id: 2, email: email } });
    });

    module.exports = router;

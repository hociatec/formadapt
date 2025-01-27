const express = require('express');
    const router = express.Router();

    let favorites = [];

    router.get('/', (req, res) => {
      res.json(favorites);
    });

    router.post('/:courseId', (req, res) => {
      const { courseId } = req.params;
      if (!favorites.includes(courseId)) {
        favorites.push(courseId);
      }
      res.json(favorites);
    });

    router.delete('/:courseId', (req, res) => {
      const { courseId } = req.params;
      favorites = favorites.filter(id => id !== courseId);
      res.json(favorites);
    });

    module.exports = router;

const router = require('express').Router();
const STORIES = require('../models/stories');

router.get('/', (req, res) => {
  STORIES
    .find()
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
});

module.exports = router;
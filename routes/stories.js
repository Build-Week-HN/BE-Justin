var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('📕 Stories route');
});

module.exports = router;
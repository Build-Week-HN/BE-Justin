var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('👫 Users route');
});

module.exports = router;
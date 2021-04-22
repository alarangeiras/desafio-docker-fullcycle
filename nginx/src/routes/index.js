const router = require('express').Router();
const namesRepository = require('../repositories/names');

router.get('/', async (req, res) => {
  const result = await namesRepository.allNames();
  res.render('index', { names: result });
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: 'Derrick',
    age: req.query.age
  });
});

module.exports = router;
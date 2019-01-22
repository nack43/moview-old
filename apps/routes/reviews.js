const express = require('express');
const router = express.Router();

// to check the login process
router.get('/', (req, res) => {

  res.render('reviews', { title: 'REVIEWS' });
});

module.exports = router;

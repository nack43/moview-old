const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');

router.get('/', requireLogin, (req, res) => {

  res.render('reviews', { title: 'REVIEWS' });
});

module.exports = router;

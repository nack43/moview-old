const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');
const Review = mongoose.model('reviews');

router.get('/', requireLogin, async(req, res) => {
  const reviews = await Review.find({
    _user: req.user.id,
  });

  res.render('reviews', {
    pageTitle: 'REVIEWS',
    reviews,
  });
});

module.exports = router;

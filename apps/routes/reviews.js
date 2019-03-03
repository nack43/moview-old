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

router.get('/:id', async(req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.render('reviewDetails', { review });
    return;
  } catch (e) {
    console.log(e);
  }
})

router.delete('/:id', requireLogin, async(req, res) => {
  try {
    await Review.find({ _id: req.params.id }).remove();
  } catch (e) {
    console.log(e)
  }
  res.redirect('/');
  return;
})

router.post('/', requireLogin, async(req, res) => {

  // make actor schema object
  const review = new Review({
    title: req.body.title,
    rate: req.body.rate,
    watchedAt: req.body.watchedAt,
    prot: req.body.prot,
    imgUrl: req.body.imgUrl,
    scene1: req.body.scene_1,
    scene2: req.body.scene_2,
    scene3: req.body.scene_3,
    totalReview: req.body.total_review,
    releasedYear: req.body.releasedYear,
    runtime: req.body.runtime,
    director: req.body.director,
    _user: req.user.id,
  })

  for (let i = 0; i < req.body.actors.length; i++) { 
    review.actors.push({ charactor: req.body.charactors[i], actor: req.body.actors[i] });
  }
  
  try {
    await review.save();
  } catch (e) {
    console.log(e);
  }

  res.redirect('/reviews');
});

module.exports = router;

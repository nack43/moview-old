const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/',
  passport.authenticate('local',
  {
    failureRedirect: '/',
    failureFlash: 'Invalid username or password',
  }),
  (req, res) => {
    console.log('login successfully')
    res.redirect('/reviews');
    return;
});

// to check the login process
router.get('/session', (req, res) => {
  if (req.user) {
    res.json(req.user)
    return;
  } else {
    res.send('unauthenticated user');
    return;
  }
});

module.exports = router;

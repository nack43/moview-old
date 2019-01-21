const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  (req, res) => {
    res.send(req.user);
});

// to check the login process
router.get('/session', (req, res) => {
  if (req.user) {
    res.json(req.user)
  } else {
    res.send('unauthenticated user')
  }
});

module.exports = router;

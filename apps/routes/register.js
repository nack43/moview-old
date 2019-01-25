const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');
const axios = require('axios');

router.get('/search', requireLogin, async(req, res) => {
  let movies;
  if (req.query.s) {
    movies = await axios.get(
      process.env.OMDB_API_BASE_URL,
      {
        params: {
          s: req.query.s.replace(/\s+/g, '+'),
          apikey: process.env.OMDB_API_KEY,
        }
      }
    );
  };

  res.render('registerSearch', {
    pageTitle: 'REGISTER-SEARCH',
    movies: movies ? movies.data.Search : null,
    inputString: req.query.s,
  });
});

module.exports = router;

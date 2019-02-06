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

router.get('/:imdbId', requireLogin, async(req, res) => {
  if (!req.params.imdbId) {
    throw new Error('invalid request');
  }
  // get movie data by id
  const movie = await axios.get(
    process.env.OMDB_API_BASE_URL,
    {
      params: {
        i: req.params.imdbId,
        apikey: process.env.OMDB_API_KEY,
      }
    }
  )

  if (!movie) {
    throw new Error('movie does not find');
  }
  
  res.render('registerDetails', {
    pageTitle: 'REGISTER-DETAILS',
    title: movie.data.Title,
    releasedYear: movie.data.Year,
    runtime: movie.data.Runtime,
    director: movie.data.Director,
    ratings: movie.data.Ratings,
    actors: movie.data.Actors.split(','),
  });
})

module.exports = router;

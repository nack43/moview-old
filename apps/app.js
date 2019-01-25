require('dotenv').config();
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('./models/User');
require('./models/Review');
require('./services/passport');

// routes
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const reviewsRouter = require('./routes/reviews');
const registerRouter = require('./routes/register');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const app = express();

// rendering engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  saveUninitialized: true,
  resave: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/reviews', reviewsRouter);
app.use('/register', registerRouter);

module.exports = app;

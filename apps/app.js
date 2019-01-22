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
require('./services/passport');

// routes
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const reviewsRouter = require('./routes/reviews');

mongoose.connect(process.env.DB_URI);

// Make user manually
// const User = mongoose.model('users');
// const createInitialUser = async () => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(process.env.PASSWORD, salt);
//   const user = await User.findOne({ email: process.env.EMAIL });
//   if (user) {
//     // console.log(user);
//     return
//   }

//   new User({email: process.env.EMAIL, password: hash}).save();
// }
// createInitialUser();

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

module.exports = app;

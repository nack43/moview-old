const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('user does not exist')
    }
    done(null, user);
  } catch (err) {
    console.log(`deserializeUser Error: ${err}`)
  }
});

const verifyPassword = async (password, hash) => {
  try {
    const isMatch = await bcrypt.compareSync(password, hash);
    return isMatch;
  } catch (err) {
    console.log(`verifyPassword Error:${err}`)
  }
}

passport.use(
  new LocalStrategy(async(username, password, done) => {
    const user = await User.findOne({ email: username });
    if (!user) {
      console.log('unknown user');
      return done(null, false);
    }
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      console.log('wrong password')
      return done(null, false);
    } else {
      console.log('login successfully');
      return done(null, user);
    }
  })
);

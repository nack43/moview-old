const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: String,
  watchedAt: Date,
  rate: Number,
  imgUrl: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('reviews', reviewSchema);

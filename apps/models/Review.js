const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: String,
  watchedAt: Date,
  prot: String,
  actors: Array,
  imgUrl: String,
  scene1: String,
  scene2: String,
  scene3: String,
  totalReview: String,
  releasedYear: String,
  runtime: String,
  director: String,
  rate: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('reviews', reviewSchema);

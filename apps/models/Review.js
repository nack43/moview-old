const mongoose = require('mongoose');
const { Schema } = mongoose;
const actorSchema = new Schema({
  charactor: String,
  actor: String,
})

const reviewSchema = new Schema({
  title: String,
  watchedAt: Date,
  prot: String,
  actors: [actorSchema],
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

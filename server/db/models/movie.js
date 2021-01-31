const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    poster_path: {
      type: String
    },
    overview: {
      type: String
    },
    vote_average: {
      type: String
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

movieSchema.methods.toJSON = function () {
  const movie = this;
  const movieObject = movie.toObject();
  return movieObject;
};

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

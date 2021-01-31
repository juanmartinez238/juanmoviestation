const mongoose = require('mongoose'),
  Movie = require('../db/models/movie');

/**
 * Admin route fetchn all movies
 * @param {}
 * @return {movie}
 */
exports.fetchAllMovies = async (request, response) => {
  try {
    const movies = await Movie.find();

    response.json(movies);
  } catch (e) {
    response.status(500).json({ error: e.toString() });
  }
};
// ***********************************************//
// Create a movie
// ***********************************************//
exports.createMovie = async (req, res) => {
  try {
    const movie = await new Movie({
      ...req.body
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
// ***********************************************//
// Get a specific movie
// ***********************************************//
exports.getSpecificMovie = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).send('not a valid id');
    }
    const movie = await Movie.findOne({
      _id,
      owner: req.user._id
    });
    if (!movie) return res.status(404).send();
    res.json(movie);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Delete a movie
// ***********************************************//
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      _id: req.params.id
    });
    if (!movie) return res.status(404).json({ error: 'user not found' });
    res.json({ message: 'movie has been deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

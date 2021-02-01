const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createMovie,
    getSpecificMovie,
    deleteMovie,
    fetchAllMovies,
    getAllMovies
  } = require('../../controllers/movies');

router.get('/all', fetchAllMovies);

router.get('/allmovies', getAllMovies);

router.post('/', createMovie);

router.get('/:id', getSpecificMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
require('./db/config');
const express = require('express'),
axios = require('axios'),
morgan = require('morgan'),
cookieParser = require('cookie-parser'),
openRoutes = require('./routes/open'),
userRouter = require('./routes/secure/users'),
movieRouter = require('./routes/secure/movies'),
passport = require('./middleware/authentication'),
path = require('path'),
app = express();

//Parse incoming JSON into objects
app.use(express.json());

// Log all requests
app.use(morgan('dev'));

// Unauthenticated routes
app.use('/api/users', openRoutes);

app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//Authentication middleware
app.use('/api/*', passport.authenticate('jwt', { session: false }));

//Authenticated routes
app.use('/api/users', userRouter);

app.use('/api/movies', movieRouter);

  //MovieList- Call API for Movie list purposes
  const fetchTMDbAPI = async () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const FEATURED_API =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
    try{
      const response = await axios.get(
        FEATURED_API
      )
      return response;
    }catch (err){
      console.log(err);
    }
  }
  
  //MovieList - gets request from component
    app.get('/tmdb', async (request, response) => {
      try{
        const data = await fetchTMDbAPI();
        response.json(data.data);
      }catch (err){
        console.log(err);
      }
    })
  
    //SEARCH- CALL API FOR SEARCH PURPOSES
    const searchTMDbAPI = async (searchTerm) => {
      const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchTerm}`;
      try{
        const resp = await axios.get(
          SEARCH_API
        )
        return resp;
      }catch(err){
        console.log(err);
      }
    }
    
    //SEARCH- gets data from the request sent in search component
    app.get('/tmdb/search', async (request, response) => {
      const {searchTerm} = request.query;
      try{
        const movieData = await searchTMDbAPI(searchTerm);
        response.json(movieData.data)
      }catch (err) {
        console.log(err);
      }
    })
  

if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }
  
  module.exports = app;
  
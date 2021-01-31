if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const axios = require('axios');

const app = require('./server/app'),
  port = process.env.PORT || 8080;

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

app.listen(port, () => console.log(`Express server is up on port ${port}`));

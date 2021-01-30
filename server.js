if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const axios = require('axios');

const app = require('./server/app'),
  port = process.env.PORT || 8080;

  //CALL API FOR SEARCH PURPOSES
  const searchTMDbAPI = async (searchTerm) => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchTerm}`;
    console.log('this is API_KEY', API_KEY);
    console.log('this is other searchTerm',searchTerm);
    try{
      const resp = await axios.get(
        SEARCH_API
      )
      return resp;
    }catch(err){
      console.log(err);
    }
  }
  
  //gets data from the request sent in search component
  app.get('/tmdb/search', async (request, response) => {
    const {searchTerm} = request.query;
    console.log('this is searchTerm',searchTerm);
    try{
      const movieData = await searchTMDbAPI(searchTerm);
      console.log('this is movieData.data',movieData.data)
      response.json(movieData.data)
    }catch (err) {
      console.log(err);
    }
  })

app.listen(port, () => console.log(`Express server is up on port ${port}`));

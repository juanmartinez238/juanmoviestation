import React, { useState} from 'react';

const {REACT_APP_MOVIE_API_KEY} = process.env; 

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Search = (props) => {
    const {movies} = props;
    const [search, setSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${searchTerm}`;


    const handleSubmit = (e) => {
      e.preventDefault();
  
      try{
        if(searchTerm){
        fetch(SEARCH_API+searchTerm).then(res => res.json())
        .then(data => {
            console.log(data)
            // setMovies(data.results);
        });
  
        setSearchTerm('');
      };
      } catch (err) {
        console.log(err)
      }
    };
  
    const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    return (
        <form onSubmit={handleSubmit}>
        <input 
        className="search" 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
    )
}

export default Search;

import React, { useState} from 'react';
import SearchResults from '../components/SearchResults';


const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const Search = () => {
    const [search, setSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;


    const handleSubmit = (e) => {
      e.preventDefault();
  
      try{
        if(searchTerm){
        fetch(SEARCH_API+searchTerm).then(res => res.json())
        .then(data => {
            console.log(data.results)
            setSearch(data.results);
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
      <div>
        <form onSubmit={handleSubmit} className='search-form'>
        <input 
        className="search" 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
        <SearchResults search={search}/>
        </div>
    )
}

export default Search;

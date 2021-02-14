import React, { useState} from 'react';
import SearchResults from '../components/SearchResults';
import axios from 'axios';


const Search = () => {
    const [search, setSearch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchOurTMDbAPI = async () => {
      try{
        const response = await axios.get(`/tmdb/search?searchTerm=${searchTerm}`);
        console.log('this is response',response.data.results);
        setSearch(response.data.results)
      }catch(err){
        console.log(err);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      searchOurTMDbAPI();
    };
  
    const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }
  
    return (
      <div className='search-container'>
        <form onSubmit={handleSubmit} className='search-form'>
        <input 
        className="search" 
        type="text" 
        placeholder="Search for movie..." 
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
        <SearchResults search={search}/>
        </div>
    )
}

export default Search;

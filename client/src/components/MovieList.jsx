import React, {useEffect, useState} from 'react';
import Movie from './Movie';
const {REACT_APP_MOVIE_API_KEY} = process.env; 


const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const FEATURED_API =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    console.log(REACT_APP_MOVIE_API_KEY)

    useEffect( () => {
    fetch(FEATURED_API).then(res => res.json())
    .then(data => {
        console.log(data)
        setMovies(data.results);
    });
    },[])   
    
    return (
        
        <div className='movie-container'>
            {movies.length > 0 && movies.map(movie => 
            <Movie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default MovieList

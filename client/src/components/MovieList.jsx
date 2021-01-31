import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(`/tmdb`);
            setMovies(result.data.results);
        };
        try{
            fetchData();
        }catch (err){
            console.log(err);
        }
    },[setMovies]);
    
    return (
        
        <div className='movie-container'>
            {movies.length > 0 && movies.map(movie => 
            <Movie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default MovieList

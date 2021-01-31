import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import axios from 'axios';
// const {REACT_APP_MOVIE_API_KEY} = process.env; 


// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
// const FEATURED_API =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    // console.log(REACT_APP_MOVIE_API_KEY)

    // useEffect( () => {
    // fetch(FEATURED_API).then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     setMovies(data.results);
    // });
    // },[])   

    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios.get(`/tmdb`);
            console.log('this is result', result.data.results)
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

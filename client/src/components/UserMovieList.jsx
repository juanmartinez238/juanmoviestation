import React, {useEffect, useState} from 'react';
import UserMovie from './UserMovie';
import axios from 'axios';


const UserMovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(async () => {
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
            <UserMovie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default UserMovieList;

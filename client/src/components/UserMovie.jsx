import axios from 'axios';
import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const UserMovie = ({title, poster_path, overview, vote_average}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post('/api/movies', {
                title: title,
                poster_path: poster_path,
                overview: overview,
                vote_average: vote_average
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='movie'>
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
                <button type='submit' className='movie-button' onClick={handleSubmit}>Save Movie</button>
            </div>
        </div>
    )
}

export default UserMovie;

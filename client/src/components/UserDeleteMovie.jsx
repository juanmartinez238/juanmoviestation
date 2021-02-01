import axios from 'axios';
import React from 'react';


const IMG_API = "https://image.tmdb.org/t/p/w1280";


const UserDeleteMovie = ({_id, title, poster_path, overview, vote_average}) => {

    const handleSubmit = async (e) => {
        //Delete from database
        try{
            await axios.delete(
                `/api/movies/${_id}`
            )
            window.location.reload();
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
                <button 
                type='submit'
                className='movie-button'
                onClick={handleSubmit}
                
                >Delete Movie</button>
            </div>
        </div>
    )
}

export default UserDeleteMovie;

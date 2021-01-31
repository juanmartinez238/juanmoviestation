import React, { useEffect, useState } from 'react';
import UserDeleteMovie from './UserDeleteMovie';
// import axios from 'axios';


const TableList = () => {
     const [movies, setMovies] = useState(null);
     

     useEffect(() => {
          fetch('/api/movies/all')
            .then((data) => data.json())
            .then((res) => {
              setMovies(res);
              console.log('this is res', res)
            })
            .catch((err) => console.log(err));
      }, []);


    return (
        <div className='saved-movie-list'>
            {movies?.map(movie => {
                return (
                    <UserDeleteMovie key={movie.id} {...movie} />
                )
            }
            
            )}
        </div>
    )
}

export default TableList;

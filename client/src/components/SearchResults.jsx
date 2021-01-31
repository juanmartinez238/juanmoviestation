import React from 'react';
import UserMovie from './UserMovie';

const SearchResults = (props) => {
    const {search} = props;
    return (
        <div className='movie-container'>
            {search.length > 0 && search.map(movie => 
            <UserMovie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default SearchResults;

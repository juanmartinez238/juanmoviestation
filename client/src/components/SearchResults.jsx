import React from 'react';
import Movie from './Movie';

const SearchResults = (props) => {
    const {search} = props;
    return (
        <div className='movie-container'>
            {search.length > 0 && search.map(movie => 
            <Movie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default SearchResults;

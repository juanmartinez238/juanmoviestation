import React from 'react'
import MovieList from '../components/MovieList';
import Main from '../components/Main';
import UserNavigation from '../components/UserNavigation';


const Browse = () => {
    return (
        <div>
            <Main/>
            <UserNavigation/>
            <MovieList/>
        </div>
    )
}

export default Browse;

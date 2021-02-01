import React from 'react'
import UserMovieList from '../components/UserMovieList';
import Main from '../components/Main';
import UserNavigation from '../components/UserNavigation';


const Browse = () => {
    return (
        <div className="body">
            <Main/>
            <UserNavigation/>
            <UserMovieList/>
        </div>
    )
}

export default Browse;

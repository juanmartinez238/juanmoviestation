import React from 'react'
import UserMovieList from '../components/UserMovieList';
import Main from '../components/Main';
import UserNavigation from '../components/UserNavigation';


const Featured = () => {
    return (
        <div className="body">
            <Main/>
            <UserNavigation/>
            <UserMovieList/>
        </div>
    )
}

export default Featured;

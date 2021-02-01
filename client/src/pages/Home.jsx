import React from 'react';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import MovieList from '../components/MovieList';



const Home = () => {

    return (
        <div className="body">
            <Main />
            <Navigation />
            <MovieList />
        </div>
    )
}

export default Home;

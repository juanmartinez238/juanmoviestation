import React from 'react';
import Main from '../components/Main';
import UserNavigation from '../components/UserNavigation';

const UserHome = () => {
    return (
        <div>
            <Main/>
            <UserNavigation/>
            <h1>Saved movies</h1>
        </div>
    )
}

export default UserHome;

import React from 'react';
import Main from '../components/Main';
import TableList from '../components/TableList';
import UserNavigation from '../components/UserNavigation';

const UserHome = () => {
    return (
        <div className="body">
            <Main/>
            <UserNavigation/>
            <h1 className='user-home-heading'>Saved movies</h1>
            <TableList/>
        </div>
    )
}

export default UserHome;

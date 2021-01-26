import React from 'react';
import Main from '../components/Main';
import Search from '../components/Search';
import UserNavigation from '../components/UserNavigation';

const SearchPage = () => {
    return (
        <div>
            <Main/>
            <UserNavigation/>
            <Search/>
        </div>
    )
}

export default SearchPage;

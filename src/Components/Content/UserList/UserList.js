import React from 'react';
import ListHeader from './ListHeader/ListHeader';
import SearchBar from './SearchBar/SearchBar';
import './UserList.css'
import Users from './Users/Users';

const UserList = () => {
    return (
        <div className='user-list'>
            <ListHeader />
            <SearchBar />
            <Users />
        </div>
    );
};

export default UserList;
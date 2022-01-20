import React from 'react';
import './Content.css'
import MessegeBody from './MessegeBody/MessegeBody';
import UserList from './UserList/UserList';
const Content = () => {
    return (
        <div className='content'>
            <div className='user-list-container'>
                <UserList />
            </div>

            <MessegeBody />

        </div>
    );
};

export default Content;
import React from 'react';
import ChatBox from './ChatBox/ChatBox';
import './MessegeBody.css';
import MessegeBodyHead from './MessegeBodyHead/MessegeBodyHead';

const MessegeBody = () => {
    return (
        <div className='messege-body'>
            <MessegeBodyHead />
            <ChatBox />
        </div>
    );
};

export default MessegeBody;
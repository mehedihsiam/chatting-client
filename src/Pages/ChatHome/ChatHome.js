import React from 'react';
import Content from '../../Components/Content/Content';
import LeftMenu from '../../Components/LeftMenu/LeftMenu';
import './ChatHome.css'
const ChatHome = () => {
    return (
        <div className='parent-container'>
            <LeftMenu />
            <Content />
        </div>
    );
};

export default ChatHome;
import React, { useEffect, useState } from 'react';
import './MessegeBodyHead.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'

const MessegeBodyHead = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://mehedihsiam.github.io/fakeDB/users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className='messege-body-header'>
            <div className="header-functions">
                <div className="function">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="user-info">
                    <img src={users[0].profile} alt="" className='user-profile' />
                    <p className='my-name'>{users[0].name.split(' ')[0]}</p>
                </div>
                <div className="function">
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </div>
    );
};

export default MessegeBodyHead;
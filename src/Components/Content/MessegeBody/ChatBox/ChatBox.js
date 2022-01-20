import React, { useEffect, useState } from 'react';
import './ChatBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const ChatBox = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://mehedihsiam.github.io/fakeDB/users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users);
    return (
        <div className='chat-box'>
            <div className='chatting-header'>
                <div className="user-info">
                    <img src={users[0]?.profile} alt="user profile" className='user-profile' />
                    <p className='user-name'>{users[0]?.name}</p>
                </div>
                <div className="actions">
                    <div className="action">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                    <div className="action">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>

            </div>

            <div className='msg-input-container'>
                <div className="msg-text-container">
                    <label className='fileInput'>
                        <span>
                            <FontAwesomeIcon icon={faPaperclip} />
                        </span>
                        <input type="file" name="" id="" />
                    </label>
                    <input type="text" placeholder='Write a messege' />
                </div>
                <button type="submit" className='send-btn'>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
import React from 'react';
import './ListHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons'


const ListHeader = () => {
    return (
        <div className='list-header'>
            <div className='section-name'>
                <h2>Chat</h2>
            </div>
            <div className='sorting'>
                <div className='filter-icon'>
                    <FontAwesomeIcon icon={faSortAmountDown} />
                </div>
                <p>Short</p>
            </div>
        </div>
    );
};

export default ListHeader;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCogs, faSignOutAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import React from 'react';
import './LeftMenu.css'



const LeftMenu = () => {
    return (
        <div className='left-menu'>
            <div className="top">
                <FontAwesomeIcon icon={faTh} />
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faHouseUser} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCogs} />
                    </li>
                </ul>
            </div>

            <div className="logout">
                <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
        </div>
    );
};

export default LeftMenu;
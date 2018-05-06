import React from 'react';

export default ({ black, ant, handleClick }) => (
    <li
        onClick={handleClick}
        className={`cell ${black ? 'black' : 'white'} ${ant ? 'ant' : ''}`}
    >
    </li>
)
import React from 'react';

export default ({ black, handleClick }) => (
    <li
        onClick={handleClick}
        className={`cell ${black ? 'black' : 'white'}`}
    >
    </li>
)
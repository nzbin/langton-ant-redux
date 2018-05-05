import React from 'react';

export default ({ title, text, icon, handleClick }) => (
    <span onClick={handleClick} className="button" title={title}>
        <i className={icon}></i> {text}
    </span>
)
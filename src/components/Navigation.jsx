import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul className='menu'>
                <NavLink to="/">
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A PROPOS</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
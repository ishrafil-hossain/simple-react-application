import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-xl bg-gray-300 h-12 pt-2'>
            <div className='header'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
        </div>
    );
};

export default Header;
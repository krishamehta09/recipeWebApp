import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
    return (
        <nav className="navbar a">
            <div className="logo">
            <a href="/">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/customRecipe">Custom Recipes</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

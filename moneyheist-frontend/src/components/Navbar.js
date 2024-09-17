import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional CSS styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cast">Cast</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='head'>Cricket Player Auction</h1>
            <div className='header-info'>
                <a href="/home">Home</a>
                <a href="/details">Details</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;
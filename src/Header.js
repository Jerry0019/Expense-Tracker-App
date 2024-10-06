// src/Header.js
import React from 'react';
import logo from './assets/logo.png'; 
import './Header.css'; 
const Header = () => {
    return (
        <header className="app-header">
            <img src={logo} alt="App Logo" className="logo" />
            <h1>Expense Tracka</h1>
        </header>
    );
};

export default Header;

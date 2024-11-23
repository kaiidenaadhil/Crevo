// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#4CAF50' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/marketplace" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Marketplace</Link>
      <Link to="/create/article" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Create Content</Link>
      <Link to="/profile" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Profile</Link>
      <Link to="/login" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Register</Link>
    </nav>
  );
};

export default NavBar;

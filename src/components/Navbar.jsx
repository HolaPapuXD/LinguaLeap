import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logo.svg" alt="LinguaLeap Logo" className="logo-image" />
        <span>LinguaLeap</span>
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/levels">Levels</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
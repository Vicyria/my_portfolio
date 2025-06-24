import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Wave from './Wave';

function Header() {
  return (
    <header className="header">
      <div className="wave__block">
        <Wave />
      </div>
      <h1 className="header__title">My Portfolio</h1>
      <hr />
      <nav className="navbar">
        <Link to ="/">Home</Link>
        <Link to ="/portfolio">Portfolio</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact">Contact</Link>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
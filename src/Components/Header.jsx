import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Waves from './Waves';

function Header() {
  return (
    <header className="header">
      <div className="wave__block">
        <Waves />
      </div>
      <h1 className="header__title">My Portfolio</h1>
      <hr />
      <nav className="navbar">
        <Link to ="/">Home</Link>
        <Link to ="/portfolio">Portfolio</Link>
        <Link to ="/contact">Contact</Link>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
import React from 'react';
import image from '../assets/marvel-logo.png';

const Header = () => {
    return (
        <nav className="header">
          <a href="/">
          <img className="header__logo" src={image} alt='Marvel'></img>
          </a>
        </nav>
    )
}

export default Header;
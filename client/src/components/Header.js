import React from 'react';
import image from '../assets/marvel-logo.png';

const Header = () => {
    return (
        <nav className="header">
          <img className="header__logo" src={image} alt='Marvel'></img>
        </nav>
    )
}

export default Header;
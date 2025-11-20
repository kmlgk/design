import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>WEBENCH<sup>®</sup> Power Designer</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#designs">My Designs</a></li>
            <li><a href="#library">Component Library</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#account">Account</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import './Nav.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className={isMobileMenuOpen ? 'nav-links-mobile' : 'nav-links'}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <>&#10005;</> : <>&#9776;</>}  {/* Hamburger icon / X icon */}
      </button>
    </nav>
  );
};

export default Navbar;

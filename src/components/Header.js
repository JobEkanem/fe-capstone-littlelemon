import React, { useState } from 'react';
import '../styles/header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/">
          <img src={logo} alt="Little Lemon Restaurant header Logo" />
        </Link>

        <div className={`nav ${menuOpen ? 'menu-open' : ''}`}>
          <div className="hamburger" onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`menu ${menuOpen ? 'menu-open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={handleMenuToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleMenuToggle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" onClick={handleMenuToggle}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" onClick={handleMenuToggle}>
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/order" onClick={handleMenuToggle}>
                  Order Online
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={handleMenuToggle}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;

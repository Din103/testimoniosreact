import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className="navbar">
         <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/login">LogIn</a>
        <a href="/formulario">Formulario</a>
      </div>
      <div className="navbar-menu-icon" onClick={handleMenuClick}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
    
  )
}

// src/componentes/NavBar.js
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Testimonios</h2>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/login">LogIn</a>
        <a href="/formulario">Formulario</a>
      </div>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">Rishaba's Creations</div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#portfolio">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
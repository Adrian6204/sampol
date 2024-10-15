import React from 'react';
import './Header.css';  // Ensure you create a Header.css for specific header styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SulongEdukasyon</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#lessons">Lessons</a>
        <a href="#games">Games</a>
      </nav>
    </header>
  );
};

export default Header;

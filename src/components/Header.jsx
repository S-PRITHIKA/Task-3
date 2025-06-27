import React from 'react';

import './Header.css';  
function Header({ onToggleMenu, isMenuOpen }) {
return (
      <header className="header">
      <h1>Glow and Glam</h1>
      <button className="menu-btn" onClick={onToggleMenu}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </header>
  );
}
export default Header;
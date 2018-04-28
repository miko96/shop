import React from 'react';
import './Header.css';

const Header = ({ children }) => (
  <header className="header">
    <div className="header_stub" />
    <div className="header_content">
      {children}
    </div>
  </header>
);

export default Header;

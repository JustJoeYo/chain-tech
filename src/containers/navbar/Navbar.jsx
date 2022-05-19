import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="chaintech__navbar">
      <div className="chaintech__navbar-links">
        <div className="chaintech__navbar-links_container">
        <a href="/"><p><span>Home</span></p></a>
          <a href="/dashboard"><p><span>Dashboard</span></p></a>
          <a href="/logs"><p><span>Logs</span></p></a>
          <a href="/assets"><p><span>Assets</span></p></a>
          <a href="/config"><p><span>Config</span></p></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

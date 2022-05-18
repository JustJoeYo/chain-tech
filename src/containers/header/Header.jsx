import React from 'react';
import Logo from '../../assets/4x3logo.png';
import './header.css';

const Header = () => (
  <div className="gradient__bg">
    <div className="chaintech__header section__padding" id="home">
      <div className="chaintech__header-content">
        <div className="chaintech__header-content__logo">
          <img src={Logo} />
        </div>
      </div>
    </div>
  </div>
);

export default Header;

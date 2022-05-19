import React from 'react';
import Logo from '../../assets/4x3logo.png';
import './header.css';
import Navbar from '../navbar/Navbar';

const Header = () => (
  <div className="gradient__bg">

    <div className="chaintech__header section__padding" id="home">
      <div className="chaintech__header-content">
        <div className="chaintech__header-content__logo">
          <img src={Logo} alt="" />
          <Navbar />
        </div>
      </div>
    </div>

    
  </div>
);

export default Header;

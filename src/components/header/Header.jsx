import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo.svg'
import menuHamb from '../../assets/menu-de-hamburguesas.png';
import './header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  } 

  return (
    <div className='headerContainer'>
        <img className='logo' src={logo} alt="logo" />
        <nav className='navbar'>
          <ul className='navBarList'>
            <li className='navBarListItems'>Features</li>
            <li className='navBarListItems'>Pricing</li>
            <li className='navBarListItems'>Resources</li>
          </ul>
        </nav>
        <nav>
        <img
          className='menuHamb'
          src={menuHamb}
          alt="menuHamb"
          onClick={handleMenuClick}
        />
        {isMenuOpen && (
          <div className='menu'>
            <ul className='menuList'>
              <li className='menuListItem'>Features</li>
              <li className='menuListItem'>Pricing</li>
              <li className='menuListItem'>Resources</li>
            </ul>
          </div>
        )}
      </nav>
        {/* <nav><img className='menuHamb' src={menuHamb} alt="menuHamb" /></nav> */}
        <section className='loginSection'>
          <button className='loginButton'>Login</button>
          <button className='signUpButton'>Sign Up</button>
        </section>
    </div>
  )
}

export default Header
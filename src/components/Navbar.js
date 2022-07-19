import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../planet.png';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <header>
      <nav>
        <div className="logoContainer">
          <img src={logo} alt="planet app logo" className="logo" />
          <h1>
            <NavLink to="/">Space Traveler&apos;s Hub</NavLink>
          </h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/" className={splitLocation[1] === '' ? 'active' : ''}>Rockets</NavLink>
          </li>
          <li>
            <NavLink to="missions" className={splitLocation[1] === 'missions' ? 'active' : ''}>Missions</NavLink>
          </li>
          <li>
            <NavLink to="profile" className={splitLocation[1] === 'profile' ? 'active' : ''}>My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

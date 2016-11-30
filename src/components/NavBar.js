import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo right"></a>
      <ul id="nav-mobile" className="left hide-on-small-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dogs">Maintenance</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;

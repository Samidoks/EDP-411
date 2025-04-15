// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <NavLink to="/" end activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeClassName="active">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" activeClassName="active">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

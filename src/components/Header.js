import React from 'react';
import { NavLink } from 'react-router-dom';

// set up our individual routes via JSX
// must set root page to exact=true so it won't pattern match when navigating to other pages that contain "/"
const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
)

export default Header;
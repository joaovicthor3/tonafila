import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">To Na Fila</Link>
        <SignedInLinks />
        <SignedOutLinks />
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li> 
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

      </div>
    </nav>

  )

}

export default withRouter(Navbar);

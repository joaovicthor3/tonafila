import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  let futureNavBar = (
    <ul className="right">
      <li><NavLink exact to="/">Home</NavLink></li> 
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  )
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">To Na Fila</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>

  )

}

export default withRouter(Navbar);

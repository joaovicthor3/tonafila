import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to='/signup'>Registrar</NavLink></li>
        <li><NavLink to='/signin'>Entrar</NavLink></li>
    </ul>
  )

}

export default SignedOutLinks;

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li><NavLink to='/create'>Novo Produto</NavLink></li>
        <li><NavLink to='/'>Sair</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>JV</NavLink></li>
    </ul>
  )

}

export default SignedInLinks;

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const SignedInLinks = (user) => {
  console.log('user is ', user)
  return (
    <ul className="right">
        <li><NavLink to='/create'>Novo Produto</NavLink></li>
        <li><NavLink to='/'>Sair</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'><img className="col s5" src={user.user.pictureURL} alt="foto do usuário"/></NavLink></li>
    </ul>
  )

}

export default SignedInLinks;

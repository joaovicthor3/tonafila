import React from 'react';
import {  NavLink, withRouter } from 'react-router-dom';
import { logUserOut } from '../../store/actions/authActions';
import { connect } from 'react-redux'

const SignedInLinks = (props) => {
  const { user } = props;
  return (
    <ul className="right">
        <li><NavLink to='/create'>Novo Produto</NavLink></li>
        <li><NavLink to='/profile'>Perfil</NavLink></li>
        <li><a onClick={props.logUserOut}>Sair</a></li>
    </ul>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);

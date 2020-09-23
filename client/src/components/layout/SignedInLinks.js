import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { logUserOut } from '../../store/actions/authActions';
import { connect } from 'react-redux'

const SignedInLinks = (props) => {
  const { user } = props;
  return (
    <ul className="right">
        <li><NavLink to='/create'>Novo Produto</NavLink></li>
        <li><Link onClick={props.logUserOut}>Sair</Link></li>
        <li><NavLink to='/profile' className='btn btn-floating pink lighten-1'><img className="responsive-img" src={user.pictureURL} alt="foto do usuário"/></NavLink></li>
    </ul>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import M from  'materialize-css/dist/js/materialize.min.js';
import { render } from '@testing-library/react';

class Navbar extends React.Component {
  componentDidMount(){
    let sidenav = document.querySelector('#mobile-links');
    M.Sidenav.init(sidenav, {});

    
  }
  

  /*let futureNavBar = (
    <ul className="right">
      <li><NavLink exact to="/">Home</NavLink></li> 
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  )*/
  
  

  render() {
    if(this.props.userAuth.auth) {
      console.log('userAuth is ', this.props.userAuth);
      this.links = (<SignedInLinks user={this.props.userAuth.user} />)
      this.icon = (
        <div className="btn-floating pink lighten-1">
          <img className="responsive-img" src={this.props.userAuth.user.pictureURL} alt="foto do usuário"/>
        </div>)
    } else {
        console.log('userAuth is ', this.props.userAuth);
        this.links = (<SignedOutLinks />)
        this.icon = (<i className="material-icons">menu</i>)
    }
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper indigo darken-2">
            <div className="container">
              <Link to="/" className="brand-logo">To na Fila</Link>
              <a href="#" className="sidenav-trigger" data-target='mobile-links'>
                {this.icon}
              </a>
              <div className="right hide-on-med-and-down">
                {this.links}
              </div>
            </div>
          </nav>
          
        </div>
        <div className="sidenav" id="mobile-links">
          {this.links}  
        </div>
      </div>
    )
  
  }
  
}


export default withRouter(Navbar);
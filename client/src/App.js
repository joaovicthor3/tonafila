import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/products/ProductDetails'
import CreateProduct from './components/products/CreateProduct'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from './components/Post';
import Profile from './components/Profile'
import { connect } from 'react-redux'
import { getUser } from './store/actions/authActions'
import { Redirect } from 'react-router-dom'

// import logo from './logo.svg';
// import './App.css';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const cachedUser = localStorage.getItem("token");
    
    if(cachedUser) {
      console.log('got cached user: ', cachedUser);
      this.props.getUser(cachedUser);
    } // else console.log('no cached user.');
  }

  render() {
    const { auth, user } = this.props;
    
    let userAuth = { user, auth }
    auth ? userAuth.user = user : userAuth.user = null; 

    //JSX
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar userAuth={userAuth} />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProduct} />
            <Route path='/profile' component={Profile} />
            <Route exact path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const mapStateToProps = state => {
  return {
      user: state.auth.user,
      auth: state.auth.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (accessToken) => dispatch(getUser(accessToken)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

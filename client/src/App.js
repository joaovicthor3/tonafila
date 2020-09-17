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
// import logo from './logo.svg';
// import './App.css';
import './App.css';


class App extends React.Component {
  render() {

    //JSX
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProduct} />
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

export default App;

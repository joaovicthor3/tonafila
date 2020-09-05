import React from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
import Products from './Products';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import './App.css';


class App extends React.Component {
  state = {
    products: [{
      name: '',
      type: '',
      amount: 0,
      price: 0
    }]
  };

  addProduct = (product) => {
    product.id = Math.floor(Math.random()*500);
    let products = [...this.state.products, product];
    this.setState({
      products: products
    });
    this.apiPost(product);
  }
  deleteProduct = (id) => {
    let products = this.state.products.filter(product => {
      //console.log(products1.prototype.indexOf(product))
      return product.id !== id;
    });
    console.log(this.state.products);
    this.setState({
      products: products
    });
  }

  componentDidMount = () => {
    this.getProductPost();
  };

  getProductPost = () => {
    axios.get('/api/products')
      .then((response) => {
        this.setState({ products: response.data });
        console.log('Data has been received!');
        console.log(response.data);
      })
      .catch(() => {
        console.log('Error retrieving data!');
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  apiPost = (object) => {
    const payload = object;

    axios({
      url: '/api/products',
      method: 'POST',
      data: payload
    })
      .then((data) => {
        console.log('Data has been sent to the server: ', data);
        this.getProductPost();
      })
      .catch((error) => {
        console.log('Internal server error', error);
      });
  };

  render() {

    //JSX
    return(
      <BrowserRouter>
        <div className="App">
          <h2>Bem-vindo ao To na Fila!</h2>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <AddProduct addProduct={this.addProduct}/>
          <Products products={this.state.products} deleteProduct={this.deleteProduct}/>
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

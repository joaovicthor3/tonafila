import React, { Component } from 'react';
import axios from 'axios';
import Products from '../Products';
import AddProduct from '../AddProduct';


class Home extends Component {
  state = {
    products: []
  }
  componentDidMount = () => {
    this.getProductPost();
  };
  addProduct = (product) => {
    product.id = Math.floor(Math.random()*500);
    let products = [...this.state.products, product];
    this.setState({
      products: products
    });
    this.apiPost(product);
  }


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

  getProductPost = () => {
    axios.get('/api/products')
      .then((response) => {
        this.setState({ products: response.data.slice(0,10) });
        console.log('Data has been received!');
    //    console.log(response.data);
      })
      .catch(() => {
        console.log('Error retrieving data!');
      });
  };
  deleteProduct = (product) => {
    this.apiDelete(product);
  }
  apiDelete = (object) => {
    console.log('id: ', object.id);
    axios.delete(`/api/products/${object.id}`)
    .then((data) => {
        console.log('Data has been deleted from the server\'s database: ', data);
        this.getProductPost();
      })
      .catch((error) => {
        console.log('Internal server error', error);
      });
  };
  render(){
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <Products products={this.state.products} deleteProduct={this.deleteProduct}/>
        <AddProduct addProduct={this.addProduct}/>
      </div>
    );
  }

}

export default Home

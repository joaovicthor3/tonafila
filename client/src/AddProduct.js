import React, { Component} from 'react'

//funcional component (because of the state, data)
class AddProduct extends Component {
  state = {
    name: '',
    type: '',
    amount: '',
    price: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleChange(e);
    this.props.addProduct(this.state);
    this.setState({
      name: '',
      type: '',
      amount: '',
      price: ''
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input
          type="text"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
          />
          <label htmlFor="name">Tipo:</label>
          <input
          type="text"
          id="type"
          onChange={this.handleChange}
          value={this.state.type}
          />
          <label htmlFor="name">Quantidade:</label>
          <input
          type="text"
          id="amount"
          onChange={this.handleChange}
          value={this.state.amount}
           />
          <label htmlFor="name">Preço:</label>
          <input
          type="text"
          id="price"
          onChange={this.handleChange}
          value={this.state.price}
           />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddProduct;

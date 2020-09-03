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
    if(e.target.id === "amount" || e.target.id === "price"){
      if (this.checkForNum(e.target.value)){
        alert("Please insert a number, sir.");
        this.setState({
          [e.target.id] : ''
        });
      }
    }
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

  checkForNum = (inputValue) => {
    // Get the value of the input field with id="numb"
   // inputValue = document.getElementById("pamount").value;
    const limitQuantity = 10000;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(inputValue) || inputValue < 1 || inputValue > limitQuantity) {
      return true;
    } else {
      return false;
    }
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
          /><br />
          <label htmlFor="name">Tipo:</label>
          <input
          type="text"
          id="type"
          onChange={this.handleChange}
          value={this.state.type}
          /><br />
          <label htmlFor="name">Quantidade:</label>
          <input
          type="text"
          id="amount"
          onChange={this.handleChange}
          value={this.state.amount}
           /><br />
          <label htmlFor="name">Preço:</label>
          <input
          type="text"
          id="price"
          onChange={this.handleChange}
          value={this.state.price}
           /><br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddProduct;

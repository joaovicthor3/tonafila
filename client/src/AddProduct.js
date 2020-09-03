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
    this.validateForm();
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
  validateForm = () => {
    if (this.checkForNum(this.state.amount)){
      alert("Please insert a number, sir.");
    }
    if (this.checkForNum(this.state.price)){
      alert("Please insert a number, sir.");
    }
    /*else {
      document.getElementById("flagNum").style.display = "none";
    }
    check = checkForNum(document.getElementById("pprice").value);
    if (check === true){
      document.getElementById("flagPrice").style.display = "block";
    }
    else {
      document.getElementById("flagPrice").style.display = "none";
    }*/

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

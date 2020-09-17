import React, { Component} from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'

//funcional component (because of the state, data)
class CreateProduct extends Component {
  state = {
    id: '',
    name: '',
    type: '',
    amount: '',
    price: '',
    description: ''
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
    this.setState({
      id: Math.floor(Math.random()*500) 
    });
    this.props.createProduct(this.state);
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
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Criar Produto</h5>
            <div className="input-field">
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
            </div>
            <div className="input-field">
                <label htmlFor="type">Tipo</label>
                <input
                    type="text"
                    id="type"
                    onChange={this.handleChange}
                    value={this.state.type}
                />
            </div>
            <div className="input-field">
                <label htmlFor="amount">Quantidade</label>
                <input
                    type="text"
                    id="amount"
                    onChange={this.handleChange}
                    value={this.state.amount}
                />
            </div>   
            <div className="input-field">
                <label htmlFor="price">Preço</label>
                <input
                    type="text"
                    id="price"
                    onChange={this.handleChange}
                    value={this.state.price}
                />
            </div>
            <div className="input-field">
                <label htmlFor="description">Descrição do Produto</label>
                <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(CreateProduct);

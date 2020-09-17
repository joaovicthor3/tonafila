import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneProduct } from '../../store/actions/productActions';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const { product } = props;
    
    if (id) {
        // If there's already a product in redux store and it's equal to the id passed
        if (product && product.id == id) {
            console.log('got product and id.');
        } else { // Otherwise, get the task from db
            props.getOneProduct(id);
        }
    }

    if (product) {
        return (
            <div className="container section product-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{product.name} - {product.id}</span>
                        <p>{product.type}</p>
                        <p>{product.amount}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by JV</div>
                        <div>16th September 12am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Carregando produto...</p>
            </div>
        )
    }    
}


const mapStateToProps = (state) => {
  //  const id = ownProps.match.params.id;
    const product = state.product.product;
   // const product = products ? products.find(product => product.id == id) : null;
    return {
        product: product
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getOneProduct: (id) => dispatch(getOneProduct(id))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

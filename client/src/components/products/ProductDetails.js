import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneProduct } from '../../store/actions/productActions';
import moment from 'moment'
import 'moment/locale/pt-br'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const { product } = props;

    if (product && product.id === id) {
        let date = moment(product.createdAt).calendar();
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
                        <div>Criado por {product.authorName}</div>
                        <div>{date}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        props.getOneProduct(id);
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

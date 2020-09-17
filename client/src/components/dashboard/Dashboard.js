import React, { Component } from 'react'
import Notifications from './Notifications'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'
import { createProduct, getAllProducts } from '../../store/actions/productActions'

class Dashboard extends Component {
    componentDidMount() {
        this.props.getAllProducts();
        
    }

    render(){
        const { products } = this.props;
        console.log(products)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProductList products={products} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div> 
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.product.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getAllProducts: () => dispatch(getAllProducts()),
      createProduct: (product) => dispatch(createProduct(product))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
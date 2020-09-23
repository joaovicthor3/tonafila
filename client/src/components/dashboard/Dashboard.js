import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import { connect } from 'react-redux'
import { createProduct, getAllProducts } from '../../store/actions/productActions'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {

    componentDidMount() {
        this.props.getAllProducts();
        
    }

    render(){
        const { products } = this.props;
      //  const { auth } = this.props;
       // if(!auth) return <Redirect to='/signin' />
       // m if(!auth) return <Redirect to='/signin' />
        //console.log(products)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <ProductList products={products} />
                    </div>
                </div>
            </div> 
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.product.products,
        auth: state.auth.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getAllProducts: () => dispatch(getAllProducts()),
      createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
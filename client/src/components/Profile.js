import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProducts } from '../store/actions/productActions'
import ProductList from './products/ProductList'

export class Profile extends Component {
    checkAndGetUserProducts = (user) =>{
        this.props.getUserProducts(user.id)
    }
    render() {
        let display;
        const { user, auth, userProducts } = this.props;
        if(user && auth) {
            console.log('prods: ', userProducts);
            if(!userProducts.length){
                this.props.getUserProducts(user.id)
            }
            display = (
                <div className="container">
                    <div className="white row">
                        <div className="col s12 m8">
                            <h5>Oi {user.name}</h5>
                            <p>{user.email}</p>
                            <p>{user.id}</p>
                        </div>
                        <img className="responsive-img" src={user.pictureURL} alt="foto do usuário"/>
                    </div>
                    <h5 className="white">Seus Produtos</h5>                    
                    <ProductList products={userProducts} />
                </div>)
            
        } else {
            display = (<p>Carregando usuário...</p>)
        }
        return (
            <div className="center">{display}</div>            
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        auth: state.auth.auth,
        userProducts: state.product.userProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getUserProducts: (userId) => dispatch(getUserProducts(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
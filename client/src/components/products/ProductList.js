import React from 'react'
import ProductSummary from './ProductSummary'
import { Link } from 'react-router-dom'

const ProductList = ({products}) => {
    return (
        <div className="product-list section row">
            { products && products.map(product => {   //if we have products, do this. 
                return (
                    <Link to={'/product/' + product.id}>
                        <ProductSummary product={product} key={product.id} />
                    </Link>
                )
            })}            
        </div>
    )
}

export default ProductList
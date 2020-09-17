import React from 'react'
import ProductSummary from './ProductSummary'


const ProductList = ({products}) => {
    return (
        <div className="product-list section">
            { products && products.map(product => {   //if we have products, do this. 
                return (
                    <ProductSummary product={product} key={product.id} />
                )
            })}
        </div>
    )
}

export default ProductList
import React from 'react'

const ProductSummary = ({product}) => {
    return (
        <div className="card z-depth-0 product-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{product.name}</span>
                <p>Postado por {product.authorName}</p>
                <p className="grey-text">10th September, 4pm</p>
            </div>
        </div>
    )
}

export default ProductSummary;
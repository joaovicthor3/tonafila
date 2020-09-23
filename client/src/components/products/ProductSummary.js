import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

const ProductSummary = ({product}) => {
    let date = moment(product.createdAt).calendar();
    return (
        <div className="col s12 m3">
            <div className="card z-depth-0 product-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{product.name}</span>
                    <p>Criado por {product.authorName}</p>
                    <p className="grey-text">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductSummary;
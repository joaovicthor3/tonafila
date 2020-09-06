import React from 'react'
import { Link } from 'react-router-dom'

//UI, Stateless component, to display data
const Products = ({products, deleteProduct}) => {
  if(!products.length) return (<div className="center">No products yet</div>);
  else return (
    <div className="product-list">
      {
        products.map(product => {
          return (
            <div className="post card" key={product.id}>
              <div className="card-content">
                <Link to={'/' + product.id}>
                  <span className="card-title">{ product.name }</span>
                </Link>
                <p>{ product.type }</p>
                <h5>{ product.amount }</h5>
                <h6>{ product.price }</h6>
                <button onClick={() => {deleteProduct(product)}}>Deletar Produto</button>
                <hr />
              </div>
            </div>
          )
        })
      }
    </div>
  );

}

export default Products

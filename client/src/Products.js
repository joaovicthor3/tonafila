import React from 'react'

//UI, Stateless component, to display data
const Products = ({products, deleteProduct}) => {
  if(!products.length) return null;
  else return (
    <div className="product-list">
      {
        products.map(product => {
          console.log('product.id: ', product.id);
          return (
            <div className="product" key={product.id}>
              <h3>Name: { product.name }</h3>
              <h4>Type: { product.type }</h4>
              <h5>Amount: { product.amount }</h5>
              <h6>Price: { product.price }</h6>
              <button onClick={() => {deleteProduct(product.id)}}>Deletar Produto</button>
              <hr />
            </div>
          )
        })
      }
    </div>
  );

}

export default Products

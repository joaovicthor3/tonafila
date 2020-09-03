import React from 'react'

//UI, Stateless component, to display data
const Products = ({products}) => {
  if(!products.length) return null;
  else return (
    <div className="product-list">
      {
        products.map((product, index) => {
          return (
            <div className="product" key={index}>
              <h3>Name: { product.name }</h3>
              <h4>Type: { product.type }</h4>
              <h5>Amount: { product.amount }</h5>
              <h6>Price: { product.price }</h6>
            </div>
          )
        })
      }
    </div>
  );

}

export default Products

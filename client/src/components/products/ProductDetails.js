import React from 'react'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt esse neque deleniti non, ratione doloremque quasi architecto odio necessitatibus, quam magnam perspiciatis quos vero! Esse architecto sint aut aliquam corrupti?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by JV</div>
                    <div>16th September 12am</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

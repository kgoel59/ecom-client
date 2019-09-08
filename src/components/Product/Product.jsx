import React from 'react';

const Product = ({ product }) => {
    return (
        <>
        <div className="row">
            <div className="col">
                <h4>{product.name}</h4>
            </div>
            <div className="col-md-4">
                {product.quantity}
            </div>
        </div>
        <div className="row">
            <div className="col-md">
                <p>{product.description}</p>
            </div>
            <div className="col-md-4">
                Rs {product.price}
            </div>
        </div>
        </>
    );
};

export default Product;
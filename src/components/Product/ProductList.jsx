import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [1,2,3],
        }
    }

    Products = () => {
        return this.state.products.map((product,index) => {
            return (
                <Product/>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.Products()}
            </ul>
        );
    }
}

export default ProductList;
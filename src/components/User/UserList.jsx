import React, { Component } from 'react';
import Product from '../Product/Product';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        fetch(`http://localhost:1337/product`)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                products: result
            })
        });
    }

    Products = () => {
        return this.state.products.map((product,index) => {
            return (
                <li key ={index} className="list-group-item">
                    <Product product={product} />
                </li>
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
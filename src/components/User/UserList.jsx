import React, { Component } from 'react';
import Product from '../Product/Product';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch(`http://localhost:1337/product`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    products: result
                });
            });
    }

    Products = () => {
        return this.state.products.map((product, index) => {
            return (
                <div key={index} className="card product-list-item">
                    <div className="card-body">
                        <Product product={product} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="product-list">
                {this.Products()}
            </div>
        );
    }
}

export default UserList;
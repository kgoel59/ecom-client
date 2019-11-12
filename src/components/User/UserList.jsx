import React, { Component } from 'react';
import Product from '../Product/Product';

import { SERVER } from '../../config';

const { API_URL } = SERVER;

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch(API_URL, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: `query {
                getProducts {
                  id
                  name
                  description
                  quantity
                  price
                }
              }`})
        })
        .then(res => res.json())
        .then((result) => {
            this.setState({
                products: result.data.getProducts
            });
        });
    }

    AddtoCart = (index) => {
        let id = this.state.products[index].id;
        const auth = localStorage.getItem("auth");

        fetch(API_URL,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': auth
            },
            body: JSON.stringify({query: `mutation {
                addToCart(id: ${id}) {
                    quantity
                }
            }`})
        })
        .then(async res => res.json())
        .then((result) => {
            const products = this.state.products;
            products[index].quantity = result.data.addToCart.quantity;

            this.setState({
                products: products
            })
        })
    }

    Products = () => {
        return this.state.products.map((product, index) => {
            return (
                <div key={index} className="card product-list-item">
                    <div className="card-body">
                        <Product product={product} />
                    </div>
                    <button className="btn btn-primary" onClick={
                        ()=>{
                            this.AddtoCart(index);
                        }
                    }>Add to Cart</button>
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
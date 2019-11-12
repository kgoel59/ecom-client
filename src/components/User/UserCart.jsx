import React, { Component } from 'react';
import Product from '../Product/Product';

import { SERVER } from '../../config';

const { API_URL } = SERVER;

class UserCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
      const auth = localStorage.getItem("auth");
      fetch(API_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth
          },
          body: JSON.stringify({query: `query {
            getCart {
              products {
                name
                price
                description 
                Cart {
                  quantity
                }
              }
            }
          }`})
      })
      .then(res => res.json())
      .then((result) => {
        const products = [];
        result.data.getCart.products.forEach((product) => {
          products.push({
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: product.Cart.quantity
          });
        });

        this.setState({
            products: products
        });
      });
  }

    BuyCart = (index) => {
      this.setState(prevState => ({
        products: [...prevState.products.slice(0,index),...prevState.products.slice(index+1)]
        }))
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
                            this.BuyCart(index);
                        }
                    }>Buy</button>
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

export default UserCart;
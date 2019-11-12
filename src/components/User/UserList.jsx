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

    AddtoCart = (index) => {
        let id = this.state.products[index]._id;

        fetch(`http://localhost:1337/addToCart/${id}`,{
            credentials: 'include'
        })
        .then(async res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert(await res.text());
            }
        })
        .then((result) => {
            if(result.newProduct != null) {
            let products = this.state.products;
            products[index] = result.newProduct;
            this.setState({
                products
            })
        }
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
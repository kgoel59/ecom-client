import React, { Component } from 'react';
import Product from '../Product/Product';
import EditDeleteControl from './EditDeleteControl';

import { SERVER } from '../../config';

const { API_URL } = SERVER;

class AdminList extends Component {

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

    DeleteProduct = (index) => {
        let id = this.state.products[index].id;

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: `mutation {
                deleteProduct(id: ${id}) {
                  id
                }
              }`})
        })
        .then(() => {
        this.setState(prevState => ({
            products: [...prevState.products.slice(0,index),...prevState.products.slice(index+1)]
            }))
        })
    }

    EditProduct = (index) => {
        let product = this.state.products[index];
        this.props.history.push({
            pathname: '/admin/editProduct',
            state: product
        })
    }

    Products = () => {
        return this.state.products.map((product,index) => {
            return (
                <div key ={index} className="card product-list-item">
                    <div className="card-body">
                        <Product product={product} />
                        <EditDeleteControl index={index} 
                            deleteProduct={this.DeleteProduct}
                            editProduct={this.EditProduct}/>
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

export default AdminList;
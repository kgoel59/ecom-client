import React, { Component } from 'react';
import Product from '../Product/Product';
import EditDeleteControl from './EditDeleteControl';

class AdminList extends Component {

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

    DeleteProduct = (index) => {
        let id = this.state.products[index]._id;

        fetch(`http://localhost:1337/product/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.setState(prevState => ({
            products: [...prevState.products.slice(0,index),...prevState.products.slice(index+1)]
        }))
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
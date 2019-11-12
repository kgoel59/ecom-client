import React, { Component } from 'react';

import { SERVER } from '../../config';

const { API_URL } = SERVER;

class AddProduct extends Component {
    constructor(props) {
        super(props);

        let product = this.props.location.state;
        this.id = product.id;
        this.state = {
            productName: product.name,
            productDesc: product.description,
            productQuantity: product.quantity,
            productPrice: product.price,
        }
    }
    

    EditProduct = () => {
        const name =       this.state.productName;
        const description = this.state.productDesc;
        const quantity =    this.state.productQuantity;
        const price =       this.state.productPrice;
        const id = this.id;

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: `mutation {
                updateProduct(id: ${id}, data: {name: "${name}", description: "${description}", quantity: ${quantity}, price: ${price}}) {
                  id
                  name
                  price
                  description
                  quantity
                }
              }`})
        }).then(()=>{
            this.props.history.push('/admin');
        })
    }

    setProductName = (productName) => {
        this.setState({
            productName
        });
    }

    setProductDesc = (productDesc) => {
        this.setState({
            productDesc
        })
    }

    setProductQuantity = (productQuantity) => {
        this.setState({
            productQuantity
        })
    }

    setProductPrice = (productPrice) => {
        this.setState({
            productPrice
        })
    }


    render() {
        return (
            <div className="card addProduct">

                <div className="card-title">
                    <h4> Edit Product</h4>
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> Product Name </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Product Name"
                        value= {this.state.productName}
                        onChange={(event) => { this.setProductName(event.target.value) }} />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Description</span>
                    </div>
                    <textarea className="form-control" placeholder="Enter Product Description"
                        value= {this.state.productDesc}
                        onChange={(event) => { this.setProductDesc(event.target.value) }} />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Quantity</span>
                    </div>
                    <input type="number" className="form-control" placeholder="Enter Product Quantity"
                        value= {this.state.productQuantity}
                        onChange={(event) => { this.setProductQuantity(event.target.value) }} />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Price</span>
                    </div>
                    <input type="number" className="form-control" placeholder="Enter Product Price"
                        value= {this.state.productPrice}
                        onChange={(event) => { this.setProductPrice(event.target.value) }} />
                </div>

                <button type="button" className="btn btn-primary"
                    onClick={ ()=>{this.EditProduct()} }>Save
                </button>
            </div>
        );
    }
}

export default AddProduct;
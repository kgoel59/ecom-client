import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: "",
            productDesc: "",
            productQuantity: 0,
            productPrice: 0,
        }
    }

    render() {
        return (
            <div className="card addProduct">

                <div className="card-title">
                    <h4>ADD NEW PRODUCT</h4>
                </div>

                <div class="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Name</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Enter Product Name" />
                </div>

                <div class="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Description</span>
                    </div>
                    <textarea className="form-control" placeholder="Enter Product Description" />
                </div>

                <div class="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Quantity</span>
                    </div>
                    <input type="number" className="form-control" placeholder="Enter Product Quantity" />
                </div>

                <div class="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Product Price</span>
                    </div>
                    <input type="number" className="form-control" placeholder="Enter Product Price" />
                </div>

                <button type="button" className="btn btn-primary">Save</button>
            </div>
        );
    }
}

export default AddProduct;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import { SERVER } from '../../config';

const { API_URL } = SERVER;

class UserNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
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
                getUser {
                  name
                }
              }`})
        })
        .then(res => {
            if(res.status === 200) {
                return res.json();
            } else {
                this.setState({
                    name: null,
                });
            }
        })
        .then((result)=>{
            this.setState({
                name: result.data.getUser.name
            });
        });
    }

    getUserName() {
        if (this.state.name != null) {
            return (
                <>
                <li className="nav-item">
                    <Link to="/products"><span className="username">{this.state.name}</span></Link>
                    <Link to="/products/cart"><i className="fa fa-shopping-cart cart" aria-hidden="true"></i></Link>
                </li>
                </>
            );
        } else {
            return (
                <Link to="/" className="nav-link username"><h4>LOGIN</h4></Link>
            )
        }
    }
    render() {
        return (
            <Navbar name="Ecom">
                <ul className="navbar-nav justify-content-end">
                    {this.getUserName()}
                </ul>
            </Navbar>
        );
    }
};

export default UserNavbar;
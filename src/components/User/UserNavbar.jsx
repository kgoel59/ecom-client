import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class UserNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:1337/username`, {
                method: 'GET',
                credentials: 'include'
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
            this.setState(result);
        });
    }

    getUserName() {
        if (this.state.name != null) {
            return (
                <li className="nav-item username"><h4>{this.state.name}</h4></li>
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
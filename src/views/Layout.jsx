import React, { Component } from 'react';
import AddProduct from 'components/Admin/AddProduct';
import AdminList from 'components/Admin/AdminList';
import Navbar from 'components/Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Navbar/>
                </div>
                <div className="container">
                    <AdminList/>
                </div>
          </div>
        );
    }
}

export default Layout;
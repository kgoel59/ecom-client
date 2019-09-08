import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
              <div className="navbar-brand"><h3>Admin Pannel</h3></div>
              <div className="justify-content-end">
                <Link to='/admin/addProduct'><button className="btn btn-dark">Add New Product +</button></Link>
              </div>  
        </nav>
    );
};

export default Navbar;
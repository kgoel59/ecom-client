import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div>
            <Navbar name="Admin Pannel">
                <div className="justify-content-end">
                    <Link to='/admin/addProduct'><button className="btn btn-dark">Add New Product +</button></Link>
                </div>
            </Navbar>
        </div>
    );
};

export default AdminNavbar;
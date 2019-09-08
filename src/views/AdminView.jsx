import React from 'react';
import AddProduct from 'components/Admin/AddProduct';
import AdminList from 'components/Admin/AdminList';
import Navbar from 'components/Navbar/Navbar';

const AdminView = () => {
    return (
        <div>
            <Navbar/>
            <AdminList/>
        </div>
    );
};

export default AdminView;

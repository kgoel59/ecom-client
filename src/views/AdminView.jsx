import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import AdminList from 'components/Admin/AdminList';
import AddProduct from 'components/Admin/AddProduct';
import EditProduct from 'components/Admin/EditProduct';

class AdminView extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/admin' component={AdminList}/>
                <Route exact path='/admin/addProduct' component={AddProduct}/>
                <Route exact path='/admin/editProduct' component={EditProduct}/>
            </Switch>
        );
    }
}

export default AdminView;
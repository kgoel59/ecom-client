import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from 'components/User/UserList';
import UserCart from 'components/User/UserCart';

class UserView extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/products' component={UserList}/>
                    <Route exact path="/products/cart" component={UserCart}/>
                </Switch>
            </div>
        );
    }
}

export default UserView;
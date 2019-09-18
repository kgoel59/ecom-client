import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from 'components/User/UserList';

class UserView extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/products' component={UserList}/>
                </Switch>
            </div>
        );
    }
}

export default UserView;
import React from 'react';
import Layout from 'views/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminView from 'views/AdminView';
import UserLogin from 'components/User/UserLogin';
import UserRegister from 'components/User/UserRegister';
import UserList from 'components/User/UserList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/" component={UserLogin}/>
        <Route exact path="/register" component={UserRegister}/>
        <Route exact path="/products" component={UserList}/>

        <Route path="/admin"
          render={(props) =>
            <Layout {...props} main={<AdminView/>} />
            } 
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Layout from 'views/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminView from 'views/AdminView';
import UserView from 'views/UserView';
import UserNavbar from 'components/User/UserNavbar';
import AdminNavbar from 'components/Admin/AdminNavbar'
import UserLogin from 'components/User/UserLogin';
import UserRegister from 'components/User/UserRegister';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserLogin}/>
        <Route exact path="/register" component={UserRegister}/>

        <Route path="/products"
          render={(props) =>
            <Layout {...props} nav={<UserNavbar/>} main={<UserView/>} />
            } 
        />

        <Route path="/admin"
          render={(props) =>
            <Layout {...props} nav={<AdminNavbar/>}main={<AdminView/>} />
            } 
        />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

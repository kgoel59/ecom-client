import React from 'react';
import Layout from 'views/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {SERVER} from 'config/index'

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import AdminView from 'views/AdminView';
import UserView from 'views/UserView';
import UserNavbar from 'components/User/UserNavbar';
import AdminNavbar from 'components/Admin/AdminNavbar'
import UserLogin from 'components/User/UserLogin';
import UserRegister from 'components/User/UserRegister';

const client = new ApolloClient({
  uri: SERVER.API_URL
})

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;

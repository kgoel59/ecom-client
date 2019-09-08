import React from 'react';
import Layout from 'views/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminView from 'views/AdminView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
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

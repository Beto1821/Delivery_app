import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerOrderDetalis from './pages/CustomerOrderDetalis';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetalis } />
      </Switch>
    </LoginProvider>

  );
}

export default App;

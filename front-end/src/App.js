import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <LoginProvider>
        <Route path="/" component={ Login } />
      </LoginProvider>
    </Switch>
  );
}

export default App;

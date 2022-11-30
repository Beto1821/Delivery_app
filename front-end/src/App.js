import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <UserProvider>
        <Route exact path="/" component={ Login } />
      </UserProvider>
    </Switch>
  );
}

export default App;

import React from 'react';
import { Route, Router } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <UserProvider>
        <Route exact path="/" element={ <Login /> } />
      </UserProvider>
    </Router>
  );
}

export default App;

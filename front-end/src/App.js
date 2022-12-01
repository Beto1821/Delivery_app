import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <LoginProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route path="/products" component={ Products } />
        {/* <Route path="/checkout" component={ Checkout } />
        <Route path="/orders/:id" component={ OrderDetails } />
        <Route path="/orders/" component={ Orders } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/seller/orders/" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminManage } /> */}
      </Switch>
    </LoginProvider>

  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavigationBar, PhonesCatalog, PhoneDetailsSingle, } from './components';
import CartAside from './components/CartAside/CartAside';
import { HomePage, NoMatchPage, InCartPage, OrdersPage } from './pages';
import './App.scss';


const App = () => {
  return (
    <div className="app-container">
      <Router>
        <NavigationBar />
        <CartAside />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/phones" component={PhonesCatalog} exact />
          <Route path="/phones/:brand" component={PhoneDetailsSingle} exact />
          <Route path="/cart" component={InCartPage} />
          <Route path="/orders" component={OrdersPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, NoMatchPage, InCartPage, OrdersPage } from './pages';
import { CartAside, NavigationBar, PhonesCatalog } from './components';
import { PhoneDetailsSingle } from './components/PhonesCatalog/PhoneDetailsSingle';
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

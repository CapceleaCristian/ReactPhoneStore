import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import {
  NavigationBar,
  Home,
  PhonesCatalog,
  PhoneDetailsSingle,
  InCart,
  NoMatchPage
} from './components';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/phones" component={PhonesCatalog} exact />
          <Route path="/phones/:brand" component={PhoneDetailsSingle} exact />
          <Route path="/in-cart" component={InCart} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

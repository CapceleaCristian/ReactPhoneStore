import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import PhonesCatalog from './components/PhonesCatalog/PhonesCatalog';
import PhoneDetailsSingle from './components/PhonesCatalog/PhoneDetailsSingle/PhoneDetailsSingle';
import InCart from './components/InCart/InCart';
import NoMatchPage from './components/NoMatchPage/NoMatch';

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

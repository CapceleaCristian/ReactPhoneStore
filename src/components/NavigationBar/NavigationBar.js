import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './NavigationBar.scss';

const NavigationBar = (props) => {
   const { cart } = props;

   return (
      <nav className="navigationbar-container">
         <div className="container">
            <div className="navigationbar-inner">
               <div className="navigationbar-logo">
                  <Link to="/">PhoneStore</Link>
               </div>
               <div className="navigationbar-links">
                  <Link to="/phones">All smartphones</Link>
                  <Link to="/in-cart">In Cart ({cart.length}) </Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart
})

export default connect(mapStateToProps, null)(NavigationBar);

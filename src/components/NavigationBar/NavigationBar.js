import React from 'react';
import PropTypes from 'prop-types';
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
                  <Link to="/orders">Total Orders</Link>
                  <Link to="/phones">All smartphones</Link>
                  <Link to="/cart">In Cart ({cart.length}) </Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart
})

NavigationBar.propTypes = {
   cart: PropTypes.array
}

export default connect(mapStateToProps, null)(NavigationBar);

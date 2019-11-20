import React, { useState, useRef } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import { CartAsideItem } from './CartAsideItem';
import './CartAside.scss';

const CartAside = ({ cartItems }) => {

   const [cartAsideToggle, setCartAsideToggle] = useState(false);
   const cartAsideRef = useRef('');
   const toggleStatus = cartAsideToggle ? 'cart-state-open' : 'cart-state-closed';

   const asideToggleHandler = () => {
      setCartAsideToggle(!cartAsideToggle);
   }

   return (
      <div className={`cart-aside-container ${toggleStatus}`}
         ref={cartAsideRef}>
         <div className="icon-right-div">
            <i onClick={asideToggleHandler}
               className="fas fa-chevron-right"
            />
         </div>
         <div className="cart-aside-inner">
            <h3>Aside cart:</h3>
            <p className="cart-aside-total">
               {cartItems.length}
            </p>
            {cartItems.map((item, index) =>
               <CartAsideItem item={item} key={index} />)}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   cartItems: state.inCartData.cart
})

CartAside.propTypes = {
   cartItems: array
}

export default connect(mapStateToProps, null)(CartAside);

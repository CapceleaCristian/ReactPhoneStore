import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import { CartAsideItem } from './CartAsideItem';
import './CartAside.scss';

const CartAside = ({ cartItems }) => {

   const [cartStatus, setCartStatus] = useState(false);
   const cartAsideRef = useRef('');
   const toggleStatus = cartStatus ? 'cart-state-open' : 'cart-state-closed';

   const asideToggleHandler = () => {
      cartStatus ? setCartStatus(!cartStatus) : setCartStatus(!cartStatus);
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
            {cartItems.length > 0 ?
               cartItems.map((item, index) =>
                  <CartAsideItem item={item} key={index} />)
               :
               null}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   cartItems: state.inCartData.cart
})



export default connect(mapStateToProps, null)(CartAside);

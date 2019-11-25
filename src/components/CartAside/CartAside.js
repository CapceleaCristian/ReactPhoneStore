import React, { useState, useRef } from 'react';
import { array, func } from 'prop-types';
import { connect } from 'react-redux';

import { deleteCurrentPhoneCart, clearCurrentCart } from '../../store/actions/inCartAction';
import { CartAsideItem } from './CartAsideItem';
import './CartAside.scss';

const CartAside = ({ cartItems, deleteCurrentPhoneCart, clearCurrentCart }) => {

   const clearCartHandler = () => {
      clearCurrentCart();
   }

   const deleteCartItemHandler = (_, indexItem) => {
      deleteCurrentPhoneCart(indexItem);
   }

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
            {cartItems.map((product, index) =>
               <CartAsideItem
                  deleteCartItemHandler={deleteCartItemHandler}
                  product={product}
                  key={index}
                  index={index}
               />)}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   cartItems: state.inCartData.cart
})

const mapDispatchToProps = {
   deleteCurrentPhoneCart: deleteCurrentPhoneCart,
   clearCurrentCart: clearCurrentCart
}

CartAside.propTypes = {
   cartItems: array,
   clearCartHandler: func
}

export default connect(mapStateToProps, mapDispatchToProps)(CartAside);

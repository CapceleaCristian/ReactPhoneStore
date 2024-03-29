import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CartItem } from './CartItem';
import { confusedIMG } from '../../assets/resources/imagesURL';
import { deleteCurrentPhoneCart, clearCurrentCart } from '../../store/actions/inCartAction';
import './CartsContainer.scss';

const CartsContainer = ({ cart, deleteCurrentPhoneCart, clearCurrentCart }) => {

   const clearCartHandler = () => {
      clearCurrentCart();
   }

   const deleteCartItemHandler = (_, indexItem) => {
      deleteCurrentPhoneCart(indexItem);
   }

   return (
      <div className="cart-total-container" >
         <div className="cart-total-discard">
            {cart.length ?
               <div className="btn-discart-all">
                  <button onClick={() => clearCartHandler(cart)}>Discart All Products</button>
               </div>
               :
               <div className="cart-no-items">
                  <img src={confusedIMG} alt="" />
                  <p>Where are the items ?</p>
               </div>}
         </div>
         <div className="products-carts-container">
            <div className="row">
               {cart.map((product, index) =>
                  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                     <CartItem
                        deleteCartItemHandler={deleteCartItemHandler}
                        product={product}
                        index={index}
                     />
                  </div>)}
            </div>
         </div>
         <div className="products-order">
            {!!cart.length &&
               <div className="btn-products-order">
                  <Link to='/orders'>
                     <button>Go next with Order ?</button>
                  </Link>
               </div>}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart,
   totalAmount: state.inCartData.totalAmount
})

const mapDispatchToProps = {
   deleteCurrentPhoneCart: deleteCurrentPhoneCart,
   clearCurrentCart: clearCurrentCart
}

CartsContainer.propTypes = {
   cart: PropTypes.array,
   deleteCurrentPhoneCart: PropTypes.func,
   clearCurrentCart: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);

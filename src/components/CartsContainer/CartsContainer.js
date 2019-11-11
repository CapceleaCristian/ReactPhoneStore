import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CartItem } from '../CartItem';
import { confusedIMG } from '../../assets/resources/imagesURL';
import { deleteCurrentPhoneCart, clearCurrentCart } from '../../store/actions/inCartAction';
import './CartsContainer.scss';

const CartsContainer = (props) => {

   const { cart, deleteCurrentPhoneCart, clearCurrentCart } = props;

   const clearCartHandler = () => {
      clearCurrentCart([]);
   }

   const deleteCartHandler = (product, indexItem) => {
      let filtered = cart.filter((item, index) => index !== indexItem);
      deleteCurrentPhoneCart(filtered);
   }

   return (
      <React.Fragment>
         <div className="cart-total-discard">
            {cart.length === 0 ?
               <div className="cart-no-items">
                  <img src={confusedIMG} alt="" />
                  <p>Where are items ?</p>
               </div>
               :
               <div className="btn-discart-all">
                  <button onClick={() => clearCartHandler(cart)} >Discart All Products</button>
               </div>}
         </div>
         <div className="products-carts-container">
            <div className="row">
               {cart.map((product, index) =>
                  <div className="col-md-4" key={index}>
                     <CartItem
                        deleteCartHandler={deleteCartHandler}
                        product={product}
                        index={index}
                     />
                  </div>)}
            </div>
         </div>
         <div className="products-order">
            {cart.length === 0 ?
               <div></div>
               :
               <div className="btn-products-order">
                  <Link to='/orders'>
                     <button>Order Now ?</button>
                  </Link>
               </div>}
         </div>
      </React.Fragment>
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart,
   totalAmount: state.inCartData.totalAmount
})
const mapDispatchToProps = ({
   deleteCurrentPhoneCart: deleteCurrentPhoneCart,
   clearCurrentCart: clearCurrentCart
})

CartsContainer.propTypes = {
   cart: PropTypes.array,
   deleteCurrentPhoneCart: PropTypes.func,
   clearCurrentCart: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);

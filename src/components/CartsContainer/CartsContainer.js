import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { confusedIMG } from '../../assets/resources/imagesURL';
import { deleteCurrentPhoneCart, clearCurrentCart } from '../../store/actions/inCartAction';
import './CartsContainer.scss';

const CartsContainer = (props) => {

   const { cart, totalAmount, deleteCurrentPhoneCart, clearCurrentCart } = props;
   const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';

   const clearCartHandler = () => {
      clearCurrentCart([]);
   }

   const deleteCartHandler = (product, indexItem) => {
      let filtered = cart.filter((item, index) => index !== indexItem);
      deleteCurrentPhoneCart(filtered);
   }

   return (
      <div className="incart-page-container">
         <div className="container">
            <div className="cart-top-info">
               <h3>Total items in cart: (<strong>{cart.length}</strong>)</h3>
               <h3>Total amount: (<strong>{totalAmount} EUR</strong>)</h3>
            </div>
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
                        <div className="product-cart">
                           <div className="product-discard">
                              <button onClick={() => deleteCartHandler(product, index)} ><i className="fas fa-times"></i></button>
                           </div>
                           <div className="product-cart-info">
                              <img src={testIMG} alt="" />
                              <p> Brand: </p>
                              <strong>{product.Brand}</strong>
                              <p> Model: </p>
                              <strong>{product.DeviceName}</strong>
                              <p> Anounced (year):</p>
                              <strong>{product.announced}</strong>
                              <p> Price: </p>
                              <strong>{product.price}</strong>
                           </div>
                        </div>
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
         </div>
      </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);

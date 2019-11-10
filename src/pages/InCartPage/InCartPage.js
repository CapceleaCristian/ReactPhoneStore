import React from 'react';
import { connect } from 'react-redux';

import { confusedIMG } from '../../assets/resources/imagesURL';
import './InCartPage.scss';

const InCartPage = (props) => {

   const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';
   const { cart, totalAmout } = props;

   return (
      <div className="incart-page-container">
         <div className="container">
            <div className="cart-top-info">
               <h3>Total items in cart: (<strong>{cart.length}</strong>)</h3>
               <h3>Total amount: (<strong>{totalAmout} EUR</strong>)</h3>
            </div>
            <div className="cart-total-discard">
               {cart.length === 0 ?
                  <div className="cart-no-items">
                     <img src={confusedIMG} alt="" />
                     <p>Where are items ?</p>
                  </div>
                  :
                  <div className="btn-discart-all">
                     <button>Discart All Products</button>
                  </div>}
            </div>
            <div className="products-carts-container">
               <div className="row">
                  {cart.map((product, index) =>
                     <div className="col-md-4" key={index}>
                        <div className="product-cart">
                           <div className="product-discard">
                              <button><i className="fas fa-times"></i></button>
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
                     <button> Order Now</button>
                  </div>}
            </div>
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart,
   totalAmout: state.inCartData.totalAmout
})

export default connect(mapStateToProps, null)(InCartPage);

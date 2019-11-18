import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CartItem.scss';
const CartItem = ({ deleteCartItemHandler, product, index }) => {

   const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';
   const currentItemURL = product.DeviceName.split(' ').join('_');

   return (
      <div className="product-cart">
         <div className="product-discard">
            <button onClick={() => deleteCartItemHandler(product, index)} >
               <i className="fas fa-times" />
            </button>
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
            <div className="product-back-details">
               <button className="btn-back-details">
                  <Link to={`/phones/${currentItemURL}`}>Back to Details</Link>
               </button>
            </div>
         </div>
      </div>
   )
}

CartItem.propTypes = {
   deleteCartItemHandler: PropTypes.func,
   product: PropTypes.object,
   index: PropTypes.number
}

export default CartItem;

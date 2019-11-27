import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { testIMG } from '../../../utils/constants';
import './CartItem.scss';

const CartItem = ({ deleteCartItemHandler, product, index }) => {

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
            <p> Product amount: </p> <span><input type="text" value="0" /></span>
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

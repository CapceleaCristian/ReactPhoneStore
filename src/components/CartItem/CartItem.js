import React from 'react';
import PropTypes from 'prop-types';

const CartItem = (props) => {

   const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';
   const { deleteCartHandler, product, index } = props;

   return (
      <div className="product-cart">
         <div className="product-discard">
            <button onClick={() => deleteCartHandler(product, index)} >
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
         </div>
      </div>
   )
}

CartItem.propTypes = {
   deleteCartHandler: PropTypes.func,
   product: PropTypes.object,
   index: PropTypes.number
}

export default CartItem;

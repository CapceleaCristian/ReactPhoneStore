import React from 'react';
import { object, func, number } from 'prop-types';

import { testIMG } from '../../../utils/constants';
import './CartAsideItem.scss';

const CartAsideItem = ({ product, deleteCartItemHandler, index }) => {
   return (
      <div className="cart-aside-single" >
         <img src={testIMG} alt="" />
         {product.DeviceName}
         <div className="cart-aside-close">
            <i onClick={() => deleteCartItemHandler(product, index)}
               className="fas fa-times" />
         </div>
      </div>
   )
}

CartAsideItem.propTypes = {
   product: object,
   deleteCartItemHandler: func,
   index: number
}

export default CartAsideItem;

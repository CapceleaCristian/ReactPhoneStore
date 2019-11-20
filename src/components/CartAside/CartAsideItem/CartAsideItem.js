import React from 'react';
import { object } from 'prop-types';

import { testIMG } from '../../../utils/constants';
import './CartAsideItem.scss';

const CartAsideItem = ({ item }) => {

   return (
      <div className="cart-aside-single" >
         <img src={testIMG} alt="" />
         {item.DeviceName}
         <div className="cart-aside-close">
            <i className="fas fa-times" />
         </div>
      </div>
   )
}

CartAsideItem.propTypes = {
   item: object,
}

export default CartAsideItem;

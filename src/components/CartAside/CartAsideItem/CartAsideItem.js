import React from 'react';

import './CartAsideItem.scss';

const CartAsideItem = ({ item }) => {

   const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';

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

export default CartAsideItem;

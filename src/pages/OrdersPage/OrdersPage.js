import React from 'react';

import { Orders } from '../../components/Orders';
import './OrdersPage.scss';

const OrdersPage = () => {
   return (
      <div className="orders-page-container">
         <div className="container">
            <div className="order-top-text">
               <h3>User current orders:</h3>
            </div>
            <Orders />
         </div>
      </div>
   )
}
export default OrdersPage;

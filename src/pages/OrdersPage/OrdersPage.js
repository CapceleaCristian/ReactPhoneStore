import React from 'react';

import { Orders } from '../../components/Orders';
import { OrderForm } from '../../components/Orders/OrderForm';

import './OrdersPage.scss';
import { connect } from 'react-redux';

const OrdersPage = (props) => {

   const { orderResponse } = props;

   return (
      <div className="orders-page-container">
         <div className="container">
            <div className="order-top-text">
               <h3>User current orders:</h3>
               <h3>User current amount: (0 $)</h3>
            </div>
            <Orders />
            {orderResponse ? <OrderForm /> : null}
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   orderResponse: state.inCartData.orderResponse
})

export default connect(mapStateToProps, null)(OrdersPage);

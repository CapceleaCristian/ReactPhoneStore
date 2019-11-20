import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import { Orders, OrderForm } from '../../components';
import './OrdersPage.scss';

const OrdersPage = ({ orderResponse }) => {

   return (
      <div className="orders-page-container">
         <div className="container">
            <div className="order-top-text">
               <h3>User current orders:</h3>
               <h3>User current amount: (0 $)</h3>
            </div>
            <Orders />
            {orderResponse && <OrderForm />}
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   orderResponse: state.inCartData.orderResponse
})

OrdersPage.propTypes = {
   orderResponse: bool
}

export default connect(mapStateToProps, null)(OrdersPage);

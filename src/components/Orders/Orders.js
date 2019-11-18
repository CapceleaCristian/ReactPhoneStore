import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { orderGenerateForm } from '../../store/actions/inCartAction';
import { OrderItem } from '../Orders/OrderItem';
import './Orders.scss';

const Orders = (props) => {

   const { currentOrders, orderResponse, orderGenerateForm } = props;

   const displayFormHandler = () => {
      orderGenerateForm();
   }

   return (
      <div className="orders-container">
         <div className="orders-inner">
            {currentOrders.length ?
               <div className="products-table">
                  <table>
                     <tbody>
                        <tr>
                           <th>Brand</th>
                           <th>Model</th>
                           <th>Year</th>
                           <th>Price</th>
                        </tr>
                        {currentOrders.map((product, index) =>
                           <OrderItem
                              product={product}
                              key={index}
                           />)}
                     </tbody>
                  </table>
                  <div className="orders-display-form">
                     {orderResponse ?
                        null
                        :
                        <button className="btn-order-agree" onClick={displayFormHandler}>Totally agree!</button>}
                  </div>
               </div>
               :
               <h3 className="no-order-text">
                  No orders now...
            </h3>}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   currentOrders: state.inCartData.cart,
   orderResponse: state.inCartData.orderResponse,
})

const mapDispatchToProps = {
   orderGenerateForm: orderGenerateForm
}

Orders.propsTypes = {
   currentOrders: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

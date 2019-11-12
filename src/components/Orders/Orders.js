import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { OrderItem } from '../Orders/OrderItem';
import './Orders.scss';

const Orders = (props) => {

   const { currentOrders } = props;

   return (
      <div className="orders-container">
         <div className="container">
            {currentOrders.length > 0 ?
               <table>
                  <tbody>
                     <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                     </tr>
                     {currentOrders.map((product, index) =>
                        <OrderItem key={index} product={product} />)}
                  </tbody>
               </table>
               :
               <h3 className="no-order-text">
                  No orders now...
               </h3>}
         </div>
      </div>
   )
}

Orders.propsTypes = {
   currentOrders: PropTypes.array
}

const mapStateToProps = state => ({
   currentOrders: state.inCartData.cart
})

export default connect(mapStateToProps, null)(Orders);

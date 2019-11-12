import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CartsContainer } from '../../components/CartsContainer';
import './InCartPage.scss';

const InCartPage = (props) => {

   const { cart, totalAmount } = props;

   return (
      <div className="incart-page-container">
         <div className="container">
            <div className="cart-top-info">
               <h3>Total items in cart: (<strong>{cart.length}</strong>)</h3>
               <h3>Total amount: (<strong>{totalAmount} EUR</strong>)</h3>
            </div>
            <CartsContainer />
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   cart: state.inCartData.cart,
   totalAmout: state.inCartData.totalAmout
})

InCartPage.propTypes = {
   cart: PropTypes.array,
   totalAmount: PropTypes.number
}

export default connect(mapStateToProps, null)(InCartPage);

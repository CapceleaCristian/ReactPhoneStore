import React from 'react';
import { connect } from 'react-redux';

import { CartsContainer } from '../../components/CartsContainer';
// import { deleteCurrentPhoneCart, clearCurrentCart } from '../../store/actions/inCartAction';
import './InCartPage.scss';

const InCartPage = () => {

   console.log('zbs');

   return (
      <CartsContainer />
   )
}

// const mapStateToProps = state => ({
//    cart: state.inCartData.cart,
//    totalAmout: state.inCartData.totalAmout
// })
// const mapDispatchToProps = ({
//    deleteCurrentPhoneCart: deleteCurrentPhoneCart,
//    clearCurrentCart: clearCurrentCart
// })

export default connect(null, null)(InCartPage);

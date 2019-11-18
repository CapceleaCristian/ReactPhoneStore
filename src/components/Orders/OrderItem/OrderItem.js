import React from 'react';
import PropTypes from 'prop-types';

import './OrderItem.scss';

const OrderItem = ({ product }) => {

   const { Brand, DeviceName, announced, price } = product;

   return (
      <tr>
         <td>{Brand}</td>
         <td>{DeviceName}</td>
         <td>{announced}</td>
         <td>{price}</td>
      </tr>
   )
}

OrderItem.propTypes = {
   product: PropTypes.exact({
      Brand: PropTypes.string,
      DeviceName: PropTypes.string,
      announced: PropTypes.string,
      Price: PropTypes.string
   })
}

export default OrderItem;

import React from 'react';
import PropTypes from 'prop-types';

import './OrderItem.scss';

const OrderItem = (props) => {

   const { Brand, DeviceName, announced, price } = props.product;

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

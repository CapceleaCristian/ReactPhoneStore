import React from 'react';
import PropTypes from 'prop-types';

import './OrderItem.scss';

const OrderItem = (props) => {

   const { product } = props;

   return (
      <tr>
         <td>{product.Brand}</td>
         <td>{product.DeviceName}</td>
         <td>{product.announced}</td>
         <td>{product.price}</td>
      </tr>
   )
}

OrderItem.propTypes = {
   product: PropTypes.object,
   Brand: PropTypes.string,
   DeviceName: PropTypes.string,
   announced: PropTypes.string,
   Price: PropTypes.string
}

export default OrderItem;

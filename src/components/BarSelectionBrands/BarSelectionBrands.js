import React from 'react';

import { Brand } from '../PhoneProperties';
import './BarSelectionBrands.scss';

const BarSelectionBrands = () => {
   return (
      <div className="bar-selection-container">
         <div>
            <h5 className="brand-top-text">Popular brands</h5>
         </div>
         <Brand />
      </div>
   )
}

export default BarSelectionBrands;

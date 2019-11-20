import React from 'react';

import { Brand } from '../PhoneProperties';
import './BarSelectionBrands.scss';

const BarSelectionBrands = () => {
   return (
      <div className="bar-selection-container">
         <div className="bar-selection-inner">
            <div>
               <h5 className="brand-top-text">Popular brands</h5>
            </div>
            <Brand />
         </div>
      </div>
   )
}

export default BarSelectionBrands;

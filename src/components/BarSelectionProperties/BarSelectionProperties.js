import React from 'react';

import { Battery, Camera, Memory, Dimension } from '../PhoneProperties';
import './BarSelectionProperties.scss';

const BarSelectionProperties = () => {
   return (
      <div className="bar-selection-properties">
         <div>
            <h5 className="properties-top-text">Properties:</h5>
         </div>
         <div className="properties-inner">
            <Dimension />
            <Camera />
            <Memory />
            <Battery />
         </div>
      </div>
   )
}

export default BarSelectionProperties;

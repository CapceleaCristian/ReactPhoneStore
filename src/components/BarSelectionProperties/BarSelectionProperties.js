import React from 'react';
import Battery from '../BarSelectionProperties/Battery/Battery';
import Camera from '../BarSelectionProperties/Camera/Camera';
import Memory from '../BarSelectionProperties/Memory/Memory';
import Dimension from '../BarSelectionProperties/Dimension/Dimension';

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

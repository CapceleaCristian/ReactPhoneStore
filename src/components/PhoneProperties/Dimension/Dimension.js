import React from 'react';

import { dimensionTypes } from '../../../utils/data';

const Dimension = () => {

    const dimensionArr = dimensionTypes.map(dimension => <li key={dimension}> - {dimension} - </li>);

    return (
        <div className="dimension-container">
            <div className="property-title">
                <h5>Dimensions: (Inch) </h5>
            </div>
            <ul className="phones-properties-list">
                {dimensionArr}
            </ul>
        </div>
    )
}

export default Dimension;

import React from 'react';

const Battery = () => {
    return (
        <div className="battery-container">
            <div className="property-title">
                <h5>Battery: (mAh)</h5>
            </div>
            <ul className="phones-properties-list">
                <li> - under 1000 - </li>
                <li> - 1001 - 2000- </li>
                <li> - 2001 - 3000 - </li>
                <li> - 3001 - 4000 - </li>
                <li> - higher 4100 - </li>
            </ul>
        </div>
    )
}

export default Battery;

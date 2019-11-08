import React from 'react';
import { batteryTypes } from '../../../utils/data';

const Battery = () => {

    const batteryArr = batteryTypes.map(battery => <li> - {battery} - </li>);

    return (
        <div className="battery-container">
            <div className="property-title">
                <h5>Battery: (mAh)</h5>
            </div>
            <ul className="phones-properties-list">
                {batteryArr}
            </ul>
        </div>
    )
}

export default Battery;

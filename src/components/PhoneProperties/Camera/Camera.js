import React from 'react';

import { cameraTypes } from '../../../utils/data';

const Camera = () => {

    const cameraArr = cameraTypes.map(camera => <li key={camera}> - {camera} - </li>);

    return (
        <div className="camera-container">
            <div className="property-title">
                <h5>Camera: (MP)</h5>
            </div>
            <ul className="phones-properties-list">
                {cameraArr}
            </ul>
        </div>
    )
}

export default Camera;

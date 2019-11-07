import React from 'react';
import { cameraTypes } from '../../../utils/data';

const camera = cameraTypes.map(camera => <li> - {camera} - </li>);

const Camera = () => {
    return (
        <div className="camera-container">
            <div className="property-title">
                <h5>Camera: (MP)</h5>
            </div>
            <ul className="phones-properties-list">
                {camera}
            </ul>
        </div>
    )
}

export default Camera;

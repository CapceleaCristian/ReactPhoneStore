import React from 'react';
import { memoryTypes } from '../../../utils/data';

const memory = memoryTypes.map(memory => <li> - {memory} - </li>);

const Memory = () => {
    return (
        <div className="memory-container">
            <div className="property-title">
                <h5>Memory: (GB)</h5>
            </div>
            <ul className="phones-properties-list">
                {memory}
            </ul>
        </div>
    )
}

export default Memory;

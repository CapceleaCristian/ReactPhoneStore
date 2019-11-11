import React from 'react';
import { memoryTypes } from '../../../utils/data';

const memoryArr = memoryTypes.map(memory => <li key={memory}> - {memory} - </li>);

const Memory = () => {
    return (
        <div className="memory-container">
            <div className="property-title">
                <h5>Memory: (GB)</h5>
            </div>
            <ul className="phones-properties-list">
                {memoryArr}
            </ul>
        </div>
    )
}

export default Memory;

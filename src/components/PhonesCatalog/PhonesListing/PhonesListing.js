import React from 'react';
import { Link } from 'react-router-dom';

import './PhonesListing.scss';

const PhonesListing = ({ currentItems }) => {
    return (
        <div className="phone-listing">
            {currentItems.map((i, index) =>
                <div key={index}>
                    <Link to={{
                        pathname: `/phones/${i.DeviceName.split(' ').join('-')}`,
                        phone: { info: [i] }
                    }}>
                        {i.DeviceName}
                    </Link>
                </div>)}
        </div>
    )
}

export default PhonesListing;

import React from 'react';
import { Link } from 'react-router-dom';

import './PhonesListing.scss';

const PhonesListing = ({ currentItems }) => {
   return (
      <div className="phone-listing">
         {currentItems.map((phoneInfo, index) =>
            <div key={index}>
               <Link to={{
                  pathname: `/phones/${phoneInfo.DeviceName.split(' ').join('-')}`,
                  phone: phoneInfo
               }}>
                  {phoneInfo.DeviceName}
               </Link>
            </div>)}
      </div>
   )
}

export default PhonesListing;

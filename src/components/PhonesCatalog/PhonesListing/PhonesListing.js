import React from 'react';
import { Link } from 'react-router-dom';

import './PhonesListing.scss';

const PhonesListing = (props) => {

   const { isLoading, currentItems } = props;

   return (
      <div className="phone-listing">
         {isLoading !== false ?
            <h3>Loading... </h3>
            :
            currentItems.map((phoneInfo, index) =>
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
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PhonesListing.scss';

const PhonesListing = ({ isLoading, currentItems }) => {

   return (
      <div className="phone-listing">
         {isLoading !== false ?
            <h3>Loading... </h3>
            :
            currentItems.map((phoneInfo, index) =>
               <div key={index}>
                  <Link to={{
                     pathname: `/phones/${phoneInfo.DeviceName.split(' ').join('_')}`,
                     phone: phoneInfo
                  }}>
                     {phoneInfo.DeviceName}
                  </Link>
               </div>)}
      </div>
   )
}

PhonesListing.propTypes = {
   isLoading: PropTypes.bool,
   currentItems: PropTypes.array
}

export default PhonesListing;

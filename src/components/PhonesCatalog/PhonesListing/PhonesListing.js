import React from 'react';
import { Link } from 'react-router-dom';
import { array, bool, object } from 'prop-types';

import { DotsLoader } from '../../../assets/loaders';

import './PhonesListing.scss';

const PhonesListing = ({ isLoading, currentItems, handleError }) => {

   return (
      <div className="phone-listing">
         {isLoading !== false ?
            <DotsLoader />
            :
            currentItems.length ? currentItems.map(phoneInfo =>
               <div key={phoneInfo.DeviceName}>
                  <Link to={{
                     pathname: `/phones/${phoneInfo.DeviceName.split(' ').join('_')}`,
                     phone: phoneInfo
                  }}>
                     {phoneInfo.DeviceName}
                  </Link>
               </div>)
               :
               <div className="phone-listing-nomatch">
                  <h3>{handleError.message}</h3>
               </div>
         }
      </div>
   )
}

PhonesListing.propTypes = {
   isLoading: bool,
   currentItems: array,
   handleError: object
}

export default PhonesListing;

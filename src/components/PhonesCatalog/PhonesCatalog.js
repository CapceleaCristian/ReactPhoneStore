import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { array, string, bool, func, object } from 'prop-types';

import { BarSelectionBrands, BarSelectionProperties, SearchBar, PhonesListing } from '../../components';
import { phoneTypeBrands } from '../../utils/data';
import './PhonesCatalog.scss';

import { setRandomBrand, getPhoneInfo, getBrandName } from '../../store/actions/fetchDataAction';

const PhonesCatalog = ({ items, brandName, setRandomBrand, onFetch, isLoading, handleError }) => {

   const loadRandomPhoneInfo = useCallback(() => {
      const randomPhoneBrandIndex = Math.floor(Math.random() * phoneTypeBrands.length);
      setRandomBrand(phoneTypeBrands[randomPhoneBrandIndex]);
   }, [setRandomBrand])

   useEffect(() => {
      loadRandomPhoneInfo();
      onFetch();
   }, [loadRandomPhoneInfo, onFetch]);

   return (
      <div className="phones-container">
         <div className="container">
            <div className="phones-container-top-text">
               <h4 className="phones-title">
                  Total number of smartphones on page: ({isLoading ? '...' : items.length})
               </h4>
            </div>
            <SearchBar />
            <div className="phones-inner">
               <BarSelectionBrands />
               <div className="phones-list">
                  <div className="current-target-container">
                     <h3>
                        <span
                           disabled
                           className="brandname-styled">{brandName}
                        </span>
                        : Current Target
                     </h3>
                  </div>
                  <PhonesListing
                     currentItems={items}
                     isLoading={isLoading}
                     handleError={handleError}
                  />
               </div>
               <BarSelectionProperties />
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   items: state.phonesData.data,
   isLoading: state.phonesData.isLoading,
   brandName: state.phonesData.brand,
   handleError: state.phonesData.error
})

const mapDispatchToProps = {
   onFetch: getPhoneInfo,
   brandHandler: getBrandName,
   setRandomBrand: setRandomBrand,
}

PhonesCatalog.propTypes = {
   brandName: string,
   onFetch: func,
   isLoading: bool,
   items: array,
   setRandomBrand: func,
   handleError: object
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesCatalog);

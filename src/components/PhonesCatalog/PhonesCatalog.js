import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BarSelectionBrands, BarSelectionProperties, SearchBar } from '../../components';
import { PhonesListing } from './PhonesListing';
import { phoneTypeBrands } from '../../utils/data';
import './PhonesCatalog.scss';

import { setRandomBrand, getPhoneInfo, getBrandName } from '../../store/actions/fetchDataAction';

const PhonesCatalog = ({ items, brandName, setRandomBrand, onFetch, isLoading }) => {

   const loadRandomPhoneInfo = () => {
      const randomPhoneBrandIndex = Math.floor(Math.random() * phoneTypeBrands.length);
      setRandomBrand(phoneTypeBrands[randomPhoneBrandIndex]);
   }

   useEffect(() => {
      loadRandomPhoneInfo();
      onFetch();
   }, []);

   return (
      <div className="phones-container">
         <div className="container">
            <div className="phones-container-top-text">
               <h4 className="phones-title">
                  Total number of smartphones on page: ({isLoading !== false ? '...' : items.length})
            </h4>
            </div>
            <SearchBar />
            <div className="phones-inner">
               <BarSelectionBrands />
               <div className="phones-list">
                  <div className="current-target-container">
                     <h3> <span disabled className="brandname-styled">{brandName}</span> : Current Target </h3>
                  </div>
                  <PhonesListing currentItems={items} isLoading={isLoading} />
               </div>
               <BarSelectionProperties />
            </div>
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   items: state.phonesData.data,
   isLoading: state.phonesData.isLoading,
   brandName: state.phonesData.brand
})

const mapDispatchToProps = {
   onFetch: getPhoneInfo,
   brandHandler: getBrandName,
   setRandomBrand: setRandomBrand
}

PhonesCatalog.propTypes = {
   items: PropTypes.array,
   brandName: PropTypes.string,
   onFetch: PropTypes.func,
   isLoading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesCatalog);

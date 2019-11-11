import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPhoneInfo, getBrandName } from '../../store/actions/fetchDataAction';
import { BarSelectionBrands } from '../BarSelectionBrands';
import { BarSelectionProperties } from '../BarSelectionProperties';
import { PhonesListing } from './PhonesListing';
import { SearchBar } from '../SearchBar';
import './PhonesCatalog.scss';

const PhonesCatalog = (props) => {
   // Props
   const { items, brandName } = props;
   // Functions
   const { onFetch, isLoading } = props;

   useEffect(() => {
      onFetch();
   }, [onFetch]);

   return (
      <div className="phones-container">
         <div className="container">
            <h4 className="phones-title">
               Total number of smartphones on page: ({isLoading !== false ? 'Is loading...' : items.length})
            </h4>
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
});

const mapDispatchToProps = ({
   onFetch: getPhoneInfo,
   brandHandler: getBrandName
})

PhonesCatalog.propTypes = {
   items: PropTypes.array,
   brandName: PropTypes.string,
   onFetch: PropTypes.func,
   isLoading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesCatalog);

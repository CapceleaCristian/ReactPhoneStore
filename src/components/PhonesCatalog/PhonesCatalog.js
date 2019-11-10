import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPhoneInfo, getBrandName } from '../../store/actions/fetchDataAction';
import { SearchBar } from '../SearchBar';
import { BarSelectionBrands } from '../BarSelectionBrands';
import { PhonesListing } from './PhonesListing';
import { BarSelectionProperties } from '../BarSelectionProperties';
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
                     <h3> <span disabled className="brandname-styled">{brandName}</span>  : Current Target </h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhonesCatalog);

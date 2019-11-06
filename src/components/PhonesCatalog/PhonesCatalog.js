import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { requestData, getBrandName } from '../../redux/actions/fetchDataAction';
import SearchBar from '../SearchBar/SearchBar';
import BarSelectionBrands from '../BarSelectionBrands/BarSelectionBrands';
import PhonesListing from './PhonesListing/PhonesListing';
import BarSelectionProperties from '../BarSelectionProperties/BarSelectionProperties';
import './PhonesCatalog.scss';

const PhonesCatalog = (props) => {
   // Never Ever Ever in the life time distructure multiple times from and object
   // Props
   const { brandName } = props;
   const { items } = props;
   // Functions
   const { onFetch, isLoading, brandHandler } = props;
   // Approach above is not corrent
   // At the end of the day you can do

   // const brandName = props.brandName;
   // const items = props.items;
   // const onFetch = props.onFetch;

   // TODO: Fefactor to
   // const { brandName, items, onFetch } = props;

   
   const [searchInput, setSearchInput] = useState('');
   let currentItems = [];

   useEffect(() => {
      onFetch();
   }, [onFetch]);

   if (items && items.length > 0) {
      currentItems = items.filter(i => i.DeviceName.toLowerCase().includes(searchInput.toLowerCase()));
   }

   return (
      <div className="phones-container">
         <div className="container">
            <h4 className="phones-title">
               Total number of smartphones on page: ({currentItems.length})
            </h4>
            <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
            <div className="phones-inner">
               <BarSelectionBrands />
               <div className="phones-list">
                  <div className="current-target-container">
                     <h3> <span disabled className="brandname-styled">{brandName}</span>  : Current Target </h3>
                  </div>
                  <PhonesListing currentItems={currentItems} />
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
   onFetch: requestData,
   brandHandler: getBrandName
})

export default connect(mapStateToProps, mapDispatchToProps)(PhonesCatalog);

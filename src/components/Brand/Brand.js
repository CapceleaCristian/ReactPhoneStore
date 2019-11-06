import React from 'react';
import { connect } from 'react-redux';

import { getBrandName } from '../../redux/actions/fetchDataAction';
import { requestData } from '../../redux/actions/fetchDataAction';
import './Brand.scss';

import { phoneTypeBrands } from '../../assets/services/dataArr';

const BrandComponent = (props) => {
   const { brandHandler, onFetch } = props;

   const getBrand = (e) => {
      const value = e.currentTarget.innerText;
      brandHandler(value);
      onFetch();
   }

   const BarSelectionMapping = phoneTypeBrands.map(i => {
      return (
         <div className="phones-brand-model">
            <h5
               className="phones-name-title"
               onClick={getBrand}>
               {i}
            </h5>
         </div>
      )
   })

   return (
      <div className="brand-container">
         <div className="phones-brands">
            {BarSelectionMapping}
         </div>
      </div >
   )
}

const mapStateToProps = state => ({
   brandName: state.phonesData.brand
})
const mapDispatchToProps = {
   brandHandler: getBrandName,
   onFetch: requestData
}

export const Brand = connect(mapStateToProps, mapDispatchToProps)(BrandComponent);

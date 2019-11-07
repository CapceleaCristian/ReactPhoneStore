import React from 'react';
import { connect } from 'react-redux';

import { getBrandName } from '../../../store/actions/fetchDataAction';
import { getPhoneInfo } from '../../../store/actions/fetchDataAction';
import './Brand.scss';

import { phoneTypeBrands } from '../../../utils/data';

const Brand = (props) => {
   // Props
   const { brandName } = props;
   // Functions
   const { brandHandler, onFetch } = props;

   const getBrand = (e) => {
      const value = e.currentTarget.innerText;
      brandHandler(value);
      onFetch();
   }

   const BarSelectionMapping = phoneTypeBrands.map(phoneType => {
      return (
         <div className="phones-brand-model" key={phoneType}>
            <h5
               className="phones-name-title"
               onClick={getBrand}>
               {phoneType}
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
   onFetch: getPhoneInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Brand);

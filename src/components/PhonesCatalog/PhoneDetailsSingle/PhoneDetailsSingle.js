import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import stringSimilarity from 'string-similarity';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestImages } from '../../../store/actions/fetchImagesAction';
import { addPhoneToCart } from '../../../store/actions/inCartAction';
import './PhoneDetailsSingle.scss';

const PhoneDetailsSingle = (props) => {

   const { phonesInfo, onImgFetch, addPhoneToCart, match } = props;
   const { images } = props.images;

   const nameToMatch = match.params.brand;
   const matches = stringSimilarity.findBestMatch(nameToMatch, phonesInfo.map(phoneInfo => phoneInfo.DeviceName).concat(''));
   const phoneDetails = phonesInfo[matches.bestMatchIndex] || {};

   const phoneDeviceName = phoneDetails.DeviceName;
   const items = Object.keys(phoneDetails).map((key, index) =>
      <p key={index}> <strong>{key}</strong> - {phoneDetails[key]}</p>
   );

   useEffect(() => {
      onImgFetch();
   }, [onImgFetch]);

   const randomImageSrc = images.length ? images[Math.floor(Math.random() * images.length)] : null;

   const addInCartHandle = () => {
      let currentPhone = props.location.phone;
      addPhoneToCart([currentPhone]);
   }

   return (
      <div className="phone-container">
         <div className="container">
            <div className="phone-details-intro">
               <Link className="phone-back" to="/phones">
                  <p> <i className="fas fa-chevron-left" /> Back to All Phones</p>
               </Link>
               <h3>Page details for: <span>{phoneDeviceName}</span> </h3>
            </div>
            <div className="phone-inner">
               <div className="phone-details">
                  {items}
               </div>
               <div className="phone-img">
                  <div className="device-purchase-details" >
                     <p className="price-amount"> Device price: <span></span> </p>
                     <button className="btn-addcart" onClick={addInCartHandle}>  Add to Cart </button>
                  </div>
                  {images ? <img src={randomImageSrc} alt="img" /> : <h3>No Img...</h3>}
               </div>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   images: state.imagesData,
   phonesInfo: state.phonesData.data,
   brandName: state.phonesData.brand,
   cart: state.inCartData.cart
})

const mapDispatchToProps = ({
   onImgFetch: requestImages,
   addPhoneToCart: addPhoneToCart
})

PhoneDetailsSingle.propTypes = {
   location: PropTypes.object,
   phone: PropTypes.object,
   phonesInfo: PropTypes.array,
   onImgFetch: PropTypes.func,
   addPhoneToCart: PropTypes.func,
   match: PropTypes.object,
   images: PropTypes.object,
   nameToMatch: PropTypes.string,
   currentPhone: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailsSingle);

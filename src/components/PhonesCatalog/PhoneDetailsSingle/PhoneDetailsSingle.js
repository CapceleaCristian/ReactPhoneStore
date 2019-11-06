import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestImages } from '../../../store/actions/fetchImagesAction';
// import { noImg } from '../../../assets/services/constants';
import './PhoneDetailsSingle.scss';

const Phone = (props) => {
   const { onImgFetch } = props;
   const phoneDetails = props.location.phone.info[0];
   const { images } = props.images;
   const { brandName } = props;

   const phoneDeviceName = phoneDetails.DeviceName;
   const items = Object.keys(phoneDetails).map((key, index) =>
      <p key={index}> <strong>{key}</strong> - {phoneDetails[key]}</p>
   );

   useEffect(() => {
      onImgFetch();
   }, [onImgFetch]);

   let randomNum = 0;
   if (images) {
      randomNum = Math.ceil(Math.random() * (images.length - 1));
   }

   const randomPrice = `${Math.ceil(Math.random() * 150)} EUR (random)`;
   let devicePrice = 0;
   if (phoneDetails.price) {
      devicePrice = phoneDetails.price;
   }
   else {
      devicePrice = randomPrice;
   }

   return (
      <div className="phone-container">
         <div className="container">
            <div className="phone-details-intro">
               <Link className="phone-back" to="/phones">
                  <p>Back to All Phones</p>
               </Link>
               <h3>Page details for: <span>{phoneDeviceName}</span> </h3>
            </div>
            <div className="phone-inner">
               <div className="phone-details">
                  {items}
               </div>
               <div className="phone-img">
                  <div className="device-purchase-details" >
                     <p className="price-amount"> Device price: <span>{devicePrice}</span> </p>
                     <button className="btn-addcart"> Add to Cart </button>
                  </div>
                  {images ? <img src={images[randomNum]} /> : <h3>No Img...</h3>}
               </div>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   images: state.imagesData,
   brandName: state.phonesData.brand
});

const mapDispatchToProps = ({
   onImgFetch: requestImages
});

export default connect(mapStateToProps, mapDispatchToProps)(Phone);

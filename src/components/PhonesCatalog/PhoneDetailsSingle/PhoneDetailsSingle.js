import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import stringSimilarity from 'string-similarity';

import { requestImages } from '../../../redux/actions/fetchImagesAction';
import './PhoneDetailsSingle.scss';

const Phone = (props) => {
   const { onImgFetch, phonesInfo, match, images } = props;
   // Use phoneDetails not from react-router but from redux store
   // Stupid workaround match prop from react-router has 'params'
   // in params there is 'brand', for example Samsung-SGH-250
   // To search this phone in the phonesInfo from redux

   const nameToMatch = match.params.brand;
   // Find that phone from redux matches the most with url param 'brand'
   const matches = stringSimilarity.findBestMatch(nameToMatch, phonesInfo.map(phoneInfo => phoneInfo.DeviceName).concat(''));
   const phoneDetails = phonesInfo[matches.bestMatchIndex] || {};

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
   images: state.imagesData.images,
   phonesInfo: state.phonesData.data,
   brandName: state.phonesData.brand
});

const mapDispatchToProps = ({
   onImgFetch: requestImages
});

export default connect(mapStateToProps, mapDispatchToProps)(Phone);

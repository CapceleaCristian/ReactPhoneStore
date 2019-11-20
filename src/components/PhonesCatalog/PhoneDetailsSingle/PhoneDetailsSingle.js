import React, { useEffect } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestImages } from '../../../store/actions/fetchImagesAction';
import { addPhoneToCart } from '../../../store/actions/inCartAction';
import { storeCurrentMatch, getSinglePhoneInfo } from '../../../store/actions/fetchSingleItemAction';

import './PhoneDetailsSingle.scss';

const PhoneDetailsSingle = (props) => {

   const { images, isLoading, match, singleItem, fetchSingleItem, storeCurrentMatch, onImgFetch, addPhoneToCart } = props;
   const imagesData = images.images;

   const phoneDeviceName = singleItem.DeviceName;
   const itemProperties = Object.keys(singleItem).map((key, index) =>
      <p key={index}> <strong>{key}</strong> - {singleItem[key]}</p>);

   const matchStoreHandler = () => {
      const currentMatch = match.params.brand.split('_').join(' ');
      storeCurrentMatch(currentMatch);
   }

   useEffect(() => {
      matchStoreHandler();
      fetchSingleItem();
      onImgFetch();
   }, []);

   const randomImageSrc = imagesData.length ? imagesData[Math.floor(Math.random() * imagesData.length)] : null;

   const addInCartHandle = () => {
      addPhoneToCart(singleItem);
   }

   const randomPrice = `${Math.floor(Math.random() * 500)} Eur - random`;
   let productPrice = singleItem.price || randomPrice;

   // Products that have strange price datas, are processed with high order methods to output normal price, out of 3
   if (productPrice.includes(';&thinsp;')) {
      productPrice = `${productPrice.split('/').slice(0, 1).join().split(';').slice(2, 3)} Eur`;
   }

   return (
      <div className="phone-container">
         <div className="container">
            <div className="phone-details-intro">
               <Link className="phone-back" to="/phones">
                  <p> <i className="fas fa-chevron-left" /> Back to All Phones</p>
               </Link>
               <h3>Page details for: <span>{isLoading ? 'Loading ...' : phoneDeviceName}</span> </h3>
            </div>
            <div className="phone-inner">
               <div className="phone-details">
                  {isLoading ? <h3>Loading...</h3> : itemProperties}
               </div>
               <div className="phone-img">
                  <div className="device-purchase-details" >
                     <p className="price-amount"> Device price: <span>{isLoading ? 'Loading' : productPrice}</span> </p>
                     <button className="btn-addcart" onClick={addInCartHandle}>  Add to Cart </button>
                  </div>
                  {isLoading ? <h3>Loading...</h3> : <img src={randomImageSrc} alt="img" />}
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
   cart: state.inCartData.cart,
   currentMatchStore: state.singlePhone.currentMatch,
   singleItem: state.singlePhone.singleItem,
   isLoading: state.singlePhone.isLoading
})

const mapDispatchToProps = {
   onImgFetch: requestImages,
   addPhoneToCart: addPhoneToCart,
   fetchSingleItem: getSinglePhoneInfo,
   storeCurrentMatch: storeCurrentMatch,
}

PhoneDetailsSingle.propTypes = {
   location: object,
   phone: object,
   phonesInfo: array,
   onImgFetch: func,
   addPhoneToCart: func,
   match: object,
   images: object,
   nameToMatch: string,
   currentPhone: object,
   fetchSingleItem: func,
   isLoading: bool,
   singleItem: object,
   storeCurrentMatch: func
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneDetailsSingle);

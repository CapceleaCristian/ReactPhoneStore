import React, { useEffect, useCallback } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestImages } from '../../../store/actions/fetchImagesAction';
import { addPhoneToCart } from '../../../store/actions/inCartAction';
import { storeCurrentMatch, getSinglePhoneInfo } from '../../../store/actions/fetchSingleItemAction';

import { PhoneDetailsSingleContent } from '../PhoneDetailsSingle';
import { NoMatch } from '../../../components';
import { DotsLoader } from '../../../assets/loaders';
import './PhoneDetailsSingle.scss';

const PhoneDetailsSingle = (props) => {

   const { errorHandle, images, isLoading, match, singleItem, fetchSingleItem, storeCurrentMatch, onImgFetch, addPhoneToCart } = props;
   const imagesData = images.images;

   const phoneDeviceName = singleItem.DeviceName;
   const itemProperties = Object.keys(singleItem).map((key, index) =>
      <p key={index}> <strong>{key}</strong> - {singleItem[key]}</p>);

   const matchStoreHandler = useCallback(() => {
      const currentMatch = match.params.brand.split('_').join(' ');
      storeCurrentMatch(currentMatch);
   }, [storeCurrentMatch, match.params.brand])

   useEffect(() => {
      matchStoreHandler();
      fetchSingleItem();
      onImgFetch();
   }, [fetchSingleItem, matchStoreHandler, onImgFetch]);

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
            {isLoading ?
               <DotsLoader />
               :
               <div className="phone-container-content">
                  <div className="phone-details-intro">
                     <Link className="phone-back" to="/phones">
                        <p>
                           <i className="fas fa-chevron-left" />
                           Back to All Phones
                        </p>
                     </Link>
                     <div className="phone-details-current-phone" >
                        Page details for:
                        <span>{phoneDeviceName}</span>
                     </div>
                  </div>
                  {errorHandle ?
                     <NoMatch />
                     :
                     <PhoneDetailsSingleContent
                        itemProperties={itemProperties}
                        productPrice={productPrice}
                        randomImageSrc={randomImageSrc}
                        addInCartHandle={addInCartHandle}
                     />}
               </div>}
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
   isLoading: state.singlePhone.isLoading,
   errorHandle: state.singlePhone.error
})

const mapDispatchToProps = {
   onImgFetch: requestImages,
   addPhoneToCart: addPhoneToCart,
   fetchSingleItem: getSinglePhoneInfo,
   storeCurrentMatch: storeCurrentMatch,
}

PhoneDetailsSingle.propTypes = {
   errorHandle: object,
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

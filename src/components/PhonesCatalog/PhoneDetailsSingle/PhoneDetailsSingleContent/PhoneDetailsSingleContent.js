import React from 'react';
import { array, func, string } from 'prop-types';

import './PhoneDetailsSingleContent.scss';

const PhoneDetailsSingleContent = ({ itemProperties, productPrice, addInCartHandle, randomImageSrc }) => {
    return (
        <div className="phone-inner">
            <div className="phone-details">
                {itemProperties}
            </div>
            <div className="phone-img">
                <div className="device-purchase-details" >
                    <p className="price-amount"> Device price: <span>{productPrice}</span> </p>
                    <button
                        className="btn-addcart"
                        onClick={addInCartHandle}>
                        Add to Cart
                    </button>
                </div>
                <img src={randomImageSrc} alt="img" />
            </div>
        </div>
    )
}

PhoneDetailsSingleContent.propTypes = {
    itemProperties: array,
    productPrice: string,
    addInCartHandle: func,
    randomImageSrc: string,
}

export default PhoneDetailsSingleContent;

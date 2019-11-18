import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';

import './CartAside.scss';

const CartAside = ({ cartItems }) => {

    const testIMG = 'https://s.abcnews.com/images/Technology/samsung-phone-gty-jpo-190423_hpMain_16x9_992.jpg';

    const [cartStatus, setCartStatus] = useState(false);
    const cartAsideRef = useRef('');
    const toggleStatus = cartStatus ? 'cart-state-open' : 'cart-state-closed';

    const asideToggleHandler = () => {
        cartStatus ? setCartStatus(!cartStatus) : setCartStatus(!cartStatus);
    }
    return (
        <div className={`cart-aside-container ${toggleStatus}`}
            ref={cartAsideRef}
        >
            <div className="icon-right-div">
                <i onClick={asideToggleHandler}
                    className="fas fa-chevron-right"
                />
            </div>
            <div className="cart-aside-inner">
                <h3>Aside cart:</h3>
                <p className="cart-aside-total">
                    {cartItems.length}
                </p>
                {cartItems.length > 0 ?
                    cartItems.map((item, index) =>
                        <div className="cart-aside-single"
                            key={index}>
                            <img src={testIMG} alt="" />
                            {item.DeviceName}
                            <div className="cart-aside-close">
                                <i className="fas fa-times" />
                            </div>
                        </div>)
                    :
                    null}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.inCartData.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartAside);

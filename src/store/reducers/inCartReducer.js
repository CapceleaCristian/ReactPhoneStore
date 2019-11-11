import { ADD_PHONE_TO_CART } from '../types/types';

const initialState = {
    cart: [],
    totalAmout: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PHONE_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        default:
            return state
    }
}
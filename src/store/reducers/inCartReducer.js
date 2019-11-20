import { ADD_PHONE_TO_CART, DELETE_CURRENT_PHONE_CART, CLEAR_CURRENT_CART, ORDER_GENERATE_FORM } from '../types';

const initialState = {
   cart: [],
   totalAmount: 0,
   orderResponse: false
}

export default function (state = initialState, action) {
   switch (action.type) {
      case ORDER_GENERATE_FORM: {
         return {
            ...state,
            orderResponse: true
         }
      }
      case ADD_PHONE_TO_CART:
         return {
            ...state,
            cart: state.cart.concat(action.payload)
         }
      case DELETE_CURRENT_PHONE_CART:
         return {
            ...state,
            cart: state.cart.filter((_, index) => index !== action.payload)
         }
      case CLEAR_CURRENT_CART:
         return {
            ...state,
            cart: []
         }
      default:
         return state
   }
}

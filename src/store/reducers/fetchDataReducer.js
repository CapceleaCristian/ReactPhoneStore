import { API_PHONE_INFO_SUCCESS, GET_BRAND_NAME, API_PHONE_INFO_ERROR, API_PHONE_INFO_REQUEST } from '../types/types';

const initialState = {
   data: [],
   isLoading: false,
   error: null,
   brand: 'Samsung'
}

export default function (state = initialState, action) {
   switch (action.type) {
      case API_PHONE_INFO_REQUEST:
         return {
            ...state,
            isLoading: true
         }
      case API_PHONE_INFO_SUCCESS:
         return {
            ...state,
            data: action.payload.data,
            isLoading: false
         }
      case API_PHONE_INFO_ERROR:
         return {
            ...state,
            errpr: action.payload,
            isLoading: false
         }
      case GET_BRAND_NAME:
         return {
            ...state,
            brand: action.payload
         }
      default:
         return state;
   }
}

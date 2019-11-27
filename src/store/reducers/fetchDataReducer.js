import { SET_RANDOM_BRAND, API_PHONE_INFO_SUCCESS, GET_BRAND_NAME, API_PHONE_INFO_ERROR, API_PHONE_INFO_REQUEST } from '../types';

const initialState = {
   data: [],
   isLoading: null,
   error: null,
   brand: ''
}

export default function (state = initialState, action) {
   switch (action.type) {
      case SET_RANDOM_BRAND:
         return {
            ...state,
            brand: action.payload
         }
      case API_PHONE_INFO_REQUEST:
         return {
            ...state,
            isLoading: true
         }
      case API_PHONE_INFO_SUCCESS:
         return {
            ...state,
            isLoading: false,
            error: null,
            data: action.payload.apiDataResponse,
         }
      case API_PHONE_INFO_ERROR:
         return {
            ...state,
            isLoading: false,
            data: [],
            error: action.payload.error,
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

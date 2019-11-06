import { FETCH_DATA_SUCCESS, IS_LOADING, GET_BRAND_NAME } from '../types/types';

const initialState = {
   data: [],
   isLoading: false,
   brand: 'Samsung'
}

export default function (state = initialState, action) {
   switch (action.type) {
      case FETCH_DATA_SUCCESS:
         return {
            ...state,
            data: action.payload.data,
            isLoading: action.payload.isLoading
         }
      case IS_LOADING:
         return {
            ...state,
            data: action.payload.data,
            isLoading: action.payload.isLoading
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
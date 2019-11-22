import { STORE_CURRENT_MATCH, API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS, API_SINGLE_PHONE_INFO_ERROR } from '../types';

const initialState = {
   singleItem: {},
   currentMatch: '',
   isLoading: null,
   error: null
}

export default function (state = initialState, action) {
   switch (action.type) {
      case STORE_CURRENT_MATCH:
         return {
            ...state,
            currentMatch: action.payload
         }
      case API_SINGLE_PHONE_INFO_REQUEST:
         return {
            ...state,
            isLoading: true
         }
      case API_SINGLE_PHONE_INFO_SUCCESS:
         return {
            ...state,
            singleItem: action.payload.singleFiltered,
            isLoading: false
         }
      case API_SINGLE_PHONE_INFO_ERROR:
         return {
            ...state,
            error: action.payload.apiDataResponseSingle,
            isLoading: false
         }
      default:
         return state;
   }
}

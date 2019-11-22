import { takeEvery, put, call, select } from 'redux-saga/effects';
import { API_PHONE_INFO_REQUEST, API_PHONE_INFO_SUCCESS, API_PHONE_INFO_ERROR } from '../types';

import { apiDataFetch } from '../../utils/customFunc';
import { fonoapiURL, fonoToken } from '../../utils/constants';
import { getBrandName } from '../selectors';

function reqData(brandName) {
   return apiDataFetch(fonoapiURL, fonoToken, brandName)
}

function* fetchData() {

   const getBrand = yield select(getBrandName);

   const apiDataResponse = yield call(reqData, getBrand);
   // Problems with API and i can't handle witch try/catch, responese all the time: 200 
   if ('message' in apiDataResponse) {
      yield put({
         type: API_PHONE_INFO_ERROR,
         payload: {
            isLoading: false,
            apiDataResponse
         }
      })
   }
   else {
      yield put({
         type: API_PHONE_INFO_SUCCESS,
         payload: {
            isLoading: false,
            apiDataResponse
         }
      })
   }
}

export function* watchFetch() {
   yield takeEvery(API_PHONE_INFO_REQUEST, fetchData)
}

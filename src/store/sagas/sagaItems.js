import { takeEvery, put, call, select } from 'redux-saga/effects';
import { API_PHONE_INFO_REQUEST, API_PHONE_INFO_SUCCESS, } from '../types/types';

import { apiDataFetch } from '../../utils/genericFunctions';
import { fonoapiURL, fonoToken } from '../../utils/constants';

function reqData(brandName) {
   return apiDataFetch(fonoapiURL, fonoToken, brandName)
}

function* fetchData() {
   const getBrand = yield select();
   const brandName = getBrand.phonesData.brand;

   const data = yield call(reqData, brandName)
   yield put({
      type: API_PHONE_INFO_SUCCESS,
      payload: {
         isLoading: false,
         data
      }
   })
}

export function* watchFetch() {
   yield takeEvery(API_PHONE_INFO_REQUEST, fetchData)
}

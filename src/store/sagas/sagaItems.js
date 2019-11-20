import { takeEvery, put, call, select } from 'redux-saga/effects';
import { API_PHONE_INFO_REQUEST, API_PHONE_INFO_SUCCESS, } from '../types';

import { apiDataFetch } from '../../utils/customFunc';
import { fonoapiURL, fonoToken } from '../../utils/constants';
import { getBrandName } from '../selectors';

function reqData(brandName) {
   return apiDataFetch(fonoapiURL, fonoToken, brandName)
}

function* fetchData() {
   const getBrand = yield select(getBrandName);

   const data = yield call(reqData, getBrand)
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

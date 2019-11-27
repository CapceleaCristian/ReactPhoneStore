import { takeEvery, put, call, select } from 'redux-saga/effects';
import { API_PHONE_INFO_REQUEST, API_PHONE_INFO_SUCCESS, API_PHONE_INFO_ERROR } from '../types';

import { apiDataFetch } from '../../utils/customFunc';
import { fonoapiURL, fonoToken } from '../../utils/constants';
import { getBrandName } from '../selectors';

function reqData(brandName) {
   return apiDataFetch(fonoapiURL, fonoToken, brandName)
}

function* fetchData() {
   try {
      const getBrand = yield select(getBrandName);
      const apiDataResponse = yield call(reqData, getBrand);

      if (apiDataResponse.status === 'error') {
         throw apiDataResponse;
      }

      yield put({
         type: API_PHONE_INFO_SUCCESS,
         payload: {
            isLoading: false,
            apiDataResponse
         }
      })
   } catch (error) {
      yield put({
         type: API_PHONE_INFO_ERROR,
         payload: {
            isLoading: false,
            error
         }
      })
   }
}

export function* watchFetch() {
   yield takeEvery(API_PHONE_INFO_REQUEST, fetchData)
}

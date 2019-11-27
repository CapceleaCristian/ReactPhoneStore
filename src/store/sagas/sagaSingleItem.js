import { takeEvery, select, put, call } from 'redux-saga/effects';
import { API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS, API_SINGLE_PHONE_INFO_ERROR } from '../types';

import { apiDataFetch } from '../../utils/customFunc';
import { getCurrentMatch } from '../selectors';
import { fonoapiURL, fonoToken } from '../../utils/constants';

function reqSingleItem(matchNow) {
   return apiDataFetch(fonoapiURL, fonoToken, matchNow)
}

function* fetchSingleItem() {
   try {
      const getMatch = yield select(getCurrentMatch);
      const apiDataResponseSingle = yield call(reqSingleItem, getMatch)

      if (apiDataResponseSingle.status === 'error')
         throw apiDataResponseSingle;

      const singleFiltered = apiDataResponseSingle.find(i => i.DeviceName === getMatch);

      yield put({
         type: API_SINGLE_PHONE_INFO_SUCCESS,
         payload: {
            isLoading: false,
            singleFiltered
         }
      })
   } catch (error) {
      yield put({
         type: API_SINGLE_PHONE_INFO_ERROR,
         payload: {
            isLoading: false,
            error
         }
      })
   }
}
export function* watchSingleFetch() {
   yield takeEvery(API_SINGLE_PHONE_INFO_REQUEST, fetchSingleItem)
}

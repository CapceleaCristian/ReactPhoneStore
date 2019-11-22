import { takeEvery, select, put, call } from 'redux-saga/effects';
import { API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS, API_SINGLE_PHONE_INFO_ERROR } from '../types';

import { apiDataFetch } from '../../utils/customFunc';
import { getCurrentMatch } from '../selectors';
import { fonoapiURL, fonoToken } from '../../utils/constants';

function reqSingleItem(matchNow) {
    return apiDataFetch(fonoapiURL, fonoToken, matchNow)
}

// .then(res => res.find(i => i.DeviceName === matchNow)

function* fetchSingleItem() {

    const getMatch = yield select(getCurrentMatch);
    const apiDataResponseSingle = yield call(reqSingleItem, getMatch)

    // Problems with API and i can't handle witch try/catch, responese all the time: 200 
    if ('message' in apiDataResponseSingle) {
        yield put({
            type: API_SINGLE_PHONE_INFO_ERROR,
            payload: {
                isLoading: false,
                apiDataResponseSingle
            }
        })
    }
    else {
        const singleFiltered = apiDataResponseSingle.find(i => i.DeviceName === getMatch);
        yield put({
            type: API_SINGLE_PHONE_INFO_SUCCESS,
            payload: {
                isLoading: false,
                singleFiltered
            }
        })
    }
}
export function* watchSingleFetch() {
    yield takeEvery(API_SINGLE_PHONE_INFO_REQUEST, fetchSingleItem)
}

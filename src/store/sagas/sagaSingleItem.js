import { takeEvery, select, put, call } from 'redux-saga/effects';
import { API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS } from '../types/types';

import { fonoapiURL, fonoToken } from '../../utils/constants';

function reqSingleItem(matchNow) {
    return fetch(`${fonoapiURL}/v1/getdevice?token=${fonoToken}&device=${matchNow}`)
        .then(res => res.json())
        .then(res => res.find(i => i.DeviceName === matchNow))
}

function* fetchSingleItem() {
    const getMatch = yield select();
    const matchNow = getMatch.singlePhone.currentMatch;

    const singleItem = yield call(reqSingleItem, matchNow)
    yield put({
        type: API_SINGLE_PHONE_INFO_SUCCESS,
        payload: {
            isLoading: false,
            singleItem
        }
    })
}

export function* watchSingleFetch() {
    yield takeEvery(API_SINGLE_PHONE_INFO_REQUEST, fetchSingleItem)
}

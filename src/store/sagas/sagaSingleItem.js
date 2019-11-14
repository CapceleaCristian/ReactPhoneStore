import { takeEvery, select, put, call } from 'redux-saga/effects';
import { API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS, API_PHONE_INFO_ERROR } from '../types/types';

import { fonoapiURL, fonoToken } from '../../utils/constants';

function reqSingleItem(matchNow) {
    return fetch(`${fonoapiURL}/v1/getdevice?token=${fonoToken}&device=${matchNow}`)
        .then(res => res.json())
        .then(res => res.find(i => i.DeviceName === matchNow))
}

function* fetchSingleItem() {
    const getMatch = yield select();
    const matchNow = getMatch.singlePhone.currentMatch;

    try {
        const singleItem = yield call(reqSingleItem, matchNow)
        yield put({
            type: API_SINGLE_PHONE_INFO_SUCCESS,
            payload: {
                isLoading: false,
                singleItem
            }
        })
    } catch (e) {
        yield put({
            type: API_PHONE_INFO_ERROR,
            payload: e
        })
    }
}

export function* watchSingleFetch() {
    yield takeEvery(API_SINGLE_PHONE_INFO_REQUEST, fetchSingleItem)
}

import { takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST_DATA, FETCH_DATA_SUCCESS, IS_LOADING } from '../types/types';

import { fonoapiURL, fonoToken } from '../../assets/services/constants';

function reqData(brandName) {
    return fetch(`${fonoapiURL}/v1/getdevice?token=${fonoToken}&device=${brandName}`)
        .then(res => res.json())
}
function* fetchData() {
    yield put({
        type: IS_LOADING,
        payload: {
            isLoading: true,
            data: []
        }
    })
    const getBrand = yield select();
    const brandName = getBrand.phonesData.brand;

    const data = yield call(reqData, brandName)
    yield put({
        type: FETCH_DATA_SUCCESS,
        payload: {
            isLoading: false,
            data
        }
    })
}

export function* watchFetch() {
    yield takeEvery(REQUEST_DATA, fetchData)
}

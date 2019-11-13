import { takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST_IMAGES, FETCH_IMAGES_SUCCESS } from '../types/types';

import { unsplashURL, client_id } from '../../utils/constants';

function reqImages(brandName) {
    return fetch(`${unsplashURL}?query=${brandName}&client_id=${client_id}`)
        .then(res => res.json())
        .then(res => res.results.map(i => i.urls.regular));
}

function* fetchImages() {
    const getBrand = yield select();
    const brandName = getBrand.singlePhone.currentMatch;
    yield console.log(brandName);
    const images = yield call(reqImages, brandName)
    yield put({
        type: FETCH_IMAGES_SUCCESS,
        payload: {
            isLoading: false,
            images
        }
    })
}

export function* watchImages() {
    yield takeEvery(REQUEST_IMAGES, fetchImages)
}

import { takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST_IMAGES, FETCH_IMAGES_SUCCESS, IS_LOADING } from '../types/types';

import { unsplashURL, client_id } from '../../assets/services/constants';

function reqImages(brandName) {
    return fetch(`${unsplashURL}?query=${brandName}&client_id=${client_id}`)
        .then(res => res.json())
        .then(res => res.results.map(i => i.urls.regular));
}

function* fetchImages() {
    yield put({
        type: IS_LOADING,
        payload: {
            isLoading: true,
            images: []
        }
    })
    const getBrand = yield select();
    const brandName = getBrand.phonesData.brand;

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
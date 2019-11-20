import { takeEvery, put, call, select } from 'redux-saga/effects';
import { REQUEST_IMAGES, FETCH_IMAGES_SUCCESS } from '../types/types';

import { apiImagesFetch } from '../../utils/customFunc';
import { getCurrentMatch } from '../utility';
import { unsplashURL, client_id } from '../../utils/constants';

function reqImages(brandName) {
    return apiImagesFetch(unsplashURL, brandName, client_id)
        .then(res => res.results.map(i => i.urls.regular));
}

function* fetchImages() {
    const getBrand = yield select(getCurrentMatch);
    const images = yield call(reqImages, getBrand)
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

import { SET_RANDOM_BRAND, GET_BRAND_NAME, API_PHONE_INFO_SUCCESS, API_PHONE_INFO_REQUEST, API_PHONE_INFO_ERROR } from '../types/types';

export const setRandomBrand = (payload) => ({
    type: SET_RANDOM_BRAND,
    payload
})

export const getBrandName = (payload) => ({
    type: GET_BRAND_NAME,
    payload
})

export const getPhoneInfo = (payload) => ({
    type: API_PHONE_INFO_REQUEST,
    payload
})

export const phoneInfoSuccess = (payload) => ({
    type: API_PHONE_INFO_SUCCESS,
    payload
})

export const phoneInfoError = (payload) => ({
    type: API_PHONE_INFO_ERROR,
    payload
})





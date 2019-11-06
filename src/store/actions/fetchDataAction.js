import { GET_BRAND_NAME, API_PHONE_INFO_SUCCESS, API_PHONE_INFO_REQUEST, API_PHONE_INFO_ERROR } from '../types/types';

export const phoneInfoSuccess = (payload) => ({
    type: API_PHONE_INFO_SUCCESS,
    payload
})

export const getPhoneInfo = () => ({
    type: API_PHONE_INFO_REQUEST
})

export const getBrandName = (payload) => ({
    type: GET_BRAND_NAME,
    payload
})
export const phoneInfoError = (payload) => ({
    type: API_PHONE_INFO_ERROR,
    payload
})





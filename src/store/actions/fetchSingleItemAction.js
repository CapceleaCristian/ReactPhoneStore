import { STORE_CURRENT_MATCH, API_SINGLE_PHONE_INFO_REQUEST, API_SINGLE_PHONE_INFO_SUCCESS, API_SINGLE_PHONE_INFO_ERROR } from '../types/types';

export const storeCurrentMatch = (payload) => ({
    type: STORE_CURRENT_MATCH,
    payload
})

export const getSinglePhoneInfo = (payload) => ({
    type: API_SINGLE_PHONE_INFO_REQUEST,
    payload
})

export const phoneSingleInfoSuccess = (payload) => ({
    type: API_SINGLE_PHONE_INFO_SUCCESS,
    payload
})

export const phoneSingleInfoError = (payload) => ({
    type: API_SINGLE_PHONE_INFO_ERROR,
    payload
})

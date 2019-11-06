import { FETCH_DATA_SUCCESS, REQUEST_DATA, GET_BRAND_NAME } from '../types/types';

export const fetchDataSuccess = () => ({
    type: FETCH_DATA_SUCCESS
})

export const requestData = () => ({
    type: REQUEST_DATA
})

export const getBrandName = (value) => ({
    type: GET_BRAND_NAME,
    payload: value
})





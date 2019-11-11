import { ADD_PHONE_TO_CART, DELETE_CURRENT_PHONE_CART, CLEAR_CURRENT_CART } from '../types/types';

export const addPhoneToCart = (payload) => ({
    type: ADD_PHONE_TO_CART,
    payload
})

export const deleteCurrentPhoneCart = (payload) => ({
    type: DELETE_CURRENT_PHONE_CART,
    payload
})

export const clearCurrentCart = (payload) => ({
    type: CLEAR_CURRENT_CART,
    payload
})
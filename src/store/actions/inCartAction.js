import { ADD_PHONE_TO_CART, DELETE_CURRENT_PHONE_CART, CLEAR_CURRENT_CART, ORDER_GENERATE_FORM } from '../types';

export const addPhoneToCart = (payload) => ({
    type: ADD_PHONE_TO_CART,
    payload
})

export const deleteCurrentPhoneCart = (payload) => ({
    type: DELETE_CURRENT_PHONE_CART,
    payload
})

export const clearCurrentCart = () => ({
    type: CLEAR_CURRENT_CART
})

export const orderGenerateForm = (payload) => ({
    type: ORDER_GENERATE_FORM,
    payload
})

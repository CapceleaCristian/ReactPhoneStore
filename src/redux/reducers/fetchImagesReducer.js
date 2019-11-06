import { FETCH_IMAGES_SUCCESS, IS_LOADING } from "../types/types";

const initialState = {
    images: [],
    isLoading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.payload.images,
                isLoading: action.payload.isLoading
            }
        case IS_LOADING:
            return {
                ...state,
                images: action.payload.images,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}
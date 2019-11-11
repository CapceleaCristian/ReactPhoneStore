import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchImagesReducer from './fetchImagesReducer';
import inCartReducer from './inCartReducer';

export default combineReducers({
    phonesData: fetchDataReducer,
    imagesData: fetchImagesReducer,
    inCartData: inCartReducer
});
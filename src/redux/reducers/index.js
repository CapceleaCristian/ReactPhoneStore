import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import fetchImagesReducer from './fetchImagesReducer';

export default combineReducers({
    phonesData: fetchDataReducer,
    imagesData: fetchImagesReducer
});
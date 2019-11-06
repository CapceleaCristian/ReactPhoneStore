import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { watchFetch } from './sagas/sagaItems';
import { watchImages } from './sagas/sagaImages';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(watchFetch);
sagaMiddleware.run(watchImages);

export default store;
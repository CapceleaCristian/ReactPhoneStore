import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import rootReducer from './reducers';
import { watchFetch, watchImages, watchSingleFetch } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

function* rootSaga() {
    yield all([
        fork(watchFetch),
        fork(watchImages),
        fork(watchSingleFetch),
    ]);
}

sagaMiddleware.run(rootSaga);

export default store;

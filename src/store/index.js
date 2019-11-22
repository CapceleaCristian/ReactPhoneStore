import { createStore, applyMiddleware, compose } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { watchFetch, watchImages, watchSingleFetch } from './sagas';
import rootReducer from './reducers';

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

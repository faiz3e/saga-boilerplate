import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import  createSagaMiddleware  from 'redux-saga'

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/rootReducer'
import { App } from './App';
import './index.css';
// import { fetchUsersWorkerSaga } from './userList/userSaga';
import {watchfetchUserSaga} from './sagas/rootSaga'

const logger = (store) => {
    return next => {
        return action => {
            // console.log('[middleware] this action is called before reducer pickes up action ', action)
            const result = next(action);
            // console.log('[middleware] store state', store.getState())
            return result;
        }
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,sagaMiddleware)))

// sagaMiddleware.run(watchfetchUserSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

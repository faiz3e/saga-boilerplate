import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './common/store/rootReducer'
import { App } from './App';
import './index.css';

import { fetchUsersWatcherSaga } from './pages/userList/userSaga'
import { rootSaga } from './common/sagas/rootSaga';

const logger = (store) => {
    return next => {
        return action => {
            const result = next(action);
            // console.log(store);
            return result;
        }
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware,logger)))

// sagaMiddleware.run(fetchUsersWatcherSaga);                      //! todo root saga
sagaMiddleware.run(...rootSaga);                      //! todo root saga


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

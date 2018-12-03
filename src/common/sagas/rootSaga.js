import { takeLatest } from "redux-saga";
import { all } from 'redux-saga/effects';

import { fetchUsersWatcherSaga } from '../../pages/userList/userSaga';

export function* rootSaga(){
    // fetchUsersWatcherSaga    
yield  all(fetchUsersWatcherSaga)
}




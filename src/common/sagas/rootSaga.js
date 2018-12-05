import { takeLatest } from "redux-saga";
import { all, fork } from 'redux-saga/effects';

import { fetchUsersWatcherSaga } from '../../pages/userList/userSaga';

// export function* rootSaga() {
//     yield [
//         fork(fetchUsersWatcherSaga)
//     ]
// }

export const rootSaga = [
    fetchUsersWatcherSaga
]



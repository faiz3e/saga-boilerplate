import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_USERS, FETCH_USER_INITIATE, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './userListActions'

export function* fetchUsersWatcherSaga() {
  yield takeLatest(FETCH_USERS, workerSaga);
  console.log("watcher saga call");
  
}

function* workerSaga() {
  try {
    console.log("worker saga call");
    yield put({ type: FETCH_USER_INITIATE });
    const response = yield call(getData);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    // console.log(response);
  }
  catch (error) {
    console.log(error);
    yield put({ type: FETCH_USER_FAILED, error });
  }
}

const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => {
        if (response.status !== 200) {
          reject('error');
        }
        return response.json()
      })
      .then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(JSON.stringify(error));
      })
  });
}



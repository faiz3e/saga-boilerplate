import { takeLatest, call, put } from "redux-saga/effects";

import { FETCH_USERS, FETCH_USER_INITIATE, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './userListActions'


export function* fetchUsersWatcherSaga() {
  yield takeLatest(FETCH_USERS, workerSaga);
}

function* workerSaga() {
  try {
    yield put({ type: FETCH_USER_INITIATE });
    const response = yield call(getData);
    yield put({ type: FETCH_USER_SUCCESS, payload: response });
    // console.log(response);
  }
  catch (error) {
    console.log(error);
    yield put({ type: FETCH_USER_FAILED, error });
  }
}

const getData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
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



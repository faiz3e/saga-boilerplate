import { FETCH_USERS} from './userListActions'
import {ADD_COUNTER} from '../counter/counterActions'

import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios"


export function* fetchUsersWatcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    console.log("in fetchUsersWatcherSaga ");
    
  }

  function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
  }
  

  function* workerSaga() {
    try {
        console.log("in worker saga");
        
      const response = yield call(fetchDog);
      const dog = response.data.message;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "API_CALL_SUCCESS", dog });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }




// export function* fetchUsersWorkerSaga(action){
//    yield console.log("in fetch user saga ",action);
//    yield put({ type:ADD_COUNTER, payload:1 }) 
// }


// const getData = () => {
//     return new Promise((resolve, reject) => {
//       fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => {
//           if (response.status !== 200) {
//             reject('error');
//           }
//           return response.json()
//         })
//         .then((data) => {
//           console.log("data",data);
//           resolve(data);
//         }).catch((error) => {
//           reject(JSON.stringify(error));
//         })
//     });
//   }
  



// export function* checkAuthTimeoutSaga(action) {
//     yield delay(action.expirationTime * 1000);
//     yield put(actions.logout());
//   }
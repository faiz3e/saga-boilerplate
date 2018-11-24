import { put } from "redux-saga/effects";
import { FETCH_USERS} from './userListActions'
import {ADD_COUNTER} from '../counter/counterActions'




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
  

export function* fetchUsersWorkerSaga(){
   yield console.log("in fetch user saga ");
   yield put({ type:ADD_COUNTER, payload:1 }) 
}
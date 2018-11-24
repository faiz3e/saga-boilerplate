import { takeEvery } from "redux-saga";
import { fetchUsersWorkerSaga } from '../userList/userSaga';
import {ADD_COUNTER} from '../counter/counterActions';

export function* watchfetchUserSaga(){
    console.log("aaa");
    
yield takeEvery (ADD_COUNTER, fetchUsersWorkerSaga)
}

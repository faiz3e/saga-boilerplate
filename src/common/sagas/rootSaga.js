import { takeEvery ,takeLatest} from "redux-saga";
import { fetchUsersWorkerSaga } from '../../pages/userList/userSaga';
import {ADD_COUNTER} from '../../pages/counter/counterActions';

export function* watchfetchUserSaga(){
    // console.log("watchfetchUserSaga");
    
yield takeLatest (ADD_COUNTER, fetchUsersWorkerSaga)
}




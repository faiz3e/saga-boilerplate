import { combineReducers } from 'redux';
import { counterReducer } from "../counter/counterReducer";
import { todoReducer } from '../todo/todoReducer';
import { userListReducer } from "../userList/userListReducer";

export const rootReducer = combineReducers({counterReducer,todoReducer,userListReducer})

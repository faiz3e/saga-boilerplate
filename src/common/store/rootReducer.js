import { combineReducers } from 'redux';
import { counterReducer } from "../../pages/counter/counterReducer";
import { todoReducer } from '../../pages/todo/todoReducer';
import { userListReducer } from "../../pages/userList/userListReducer";

export const rootReducer = combineReducers({counterReducer,todoReducer,userListReducer})

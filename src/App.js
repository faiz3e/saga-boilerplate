import React from 'react'

import { Todo } from './todo/Todo';
import { Counter } from './counter/Counter';
import './App.css';
import { UserList } from './userList/UserList';

export const App = () => (
    <div className="App">
    <Counter/>
    <UserList/>
    <Todo/>
  </div>
)
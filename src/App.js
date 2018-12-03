import React from 'react'
import { Counter } from './pages/counter/Counter'
import { Todo } from './pages/todo/Todo';
import './App.css';
import { UserList } from './pages/userList/UserList';

export const App = () => (
  <div className="App">
    <Counter />
    <UserList />
    <Todo />
  </div>
)
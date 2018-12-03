import React from 'react';
import { connect } from 'react-redux'

import './Todo.css';
import { ADD_TODO, DEL_TODO } from './todoActions';

export const TodoComponent = (props) => {
  let input;
  return (
    <div className='Right'>
      <p>Todo</p>
      <input ref={node => input = node} />
      <br />
      <button onClick={() => {
        props.dispatch({ type: ADD_TODO, payload: { value: input.value } })
        input.value = '';
      }}>Add TODO</button>
      <br />

      {props.todo.list && props.todo.list.map((item) => {
        return (
          <div key={item.counter}>{
            <p onClick={() => {
              props.dispatch({ type: DEL_TODO, payload: { value: item.counter } })
            }}>
              {item.counter} : {item.todoText}
              <button style={{ marginLeft: 20 }}> delete </button>
              {/* // TODO filter with completed */}
            </p>
          }</div>
        )
      })
      }
    </div>
  )
}

const mapStateToprops = (state) => {
  return {
    todo: state.todoReducer
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const Todo = connect(mapStateToprops, mapDispatchToprops)(TodoComponent)

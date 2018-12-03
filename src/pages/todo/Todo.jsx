import React from 'react';
import { connect } from 'react-redux'

import './Todo.css';
import { ADD_TODO, SUB_TODO } from './todoActions';

export const TodoComponent = (props) => {
  console.log("pp:", props)
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
                props.dispatch({ type: SUB_TODO, payload: { value: item.counter } })
              }}>
                {item.counter} : {item.todoText}
                <button style={{ marginLeft: 20 }}> delete </button>
                {/* <button style={{ marginLeft: 20 }}> Completed </button> */}
                {/* // TODO filter with completed */}
              </p>
            }</div>
          )})
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

import React from 'react';
import { connect } from 'react-redux'

import './Counter.css';
import { ADD_COUNTER, SUB_COUNTER } from './counterActions';

export const CounterComponent = (props) => {
    console.log("pp:", props)
    return (
        <div className='Left'>
            <p> Counter </p>
            <p>{props.counter}</p>
            <br />
            <button onClick={() => {
                props.dispatch({ type: ADD_COUNTER, payload: 1 })
            }}> INCREMENT </button>
            <br />
            <button onClick={() => {
                props.dispatch({ type: SUB_COUNTER, payload: 1 })
            }}> SUBTRACT </button>
            <br />
        </div>
    )
}

const mapStateToprops = (state) => {
    return {
        counter: state.counterReducer.counter,
    }
}

const mapDispatchToprops = (dispatch) => ({
    dispatch
})

export const Counter = connect(mapStateToprops, mapDispatchToprops)(CounterComponent)

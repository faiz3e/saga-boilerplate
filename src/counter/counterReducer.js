import { ADD_COUNTER, SUB_COUNTER } from "./counterActions";

const initialState = {
    counter: 1
}

export const counterReducer = (state = initialState, action) => {
    if (action.type === ADD_COUNTER) {
        return {
            counter: state.counter + action.payload
        }
    }
    if (action.type === SUB_COUNTER) {
        return {
            counter: state.counter - action.payload
        }
    }
    else {
        return state;
    }
}
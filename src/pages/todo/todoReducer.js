import { ADD_TODO, SUB_TODO } from "./todoActions";

const initialState = {
    counter: 5,
    list: [                                 //* initial some value
        { todoText: "qqq", counter: 1 },
        { todoText: "www", counter: 2 },
        { todoText: "eee", counter: 3 },
        { todoText: "rrr", counter: 4 },
    ]
}

export const todoReducer = (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        return {
            counter: state.counter + 1,
            list: [...state.list, { todoText: action.payload.value, counter: state.counter }]
        }
    }
    if (action.type === SUB_TODO) {
        let temp = state.list.filter(x => x.counter !== action.payload.value)
        return {
            ...state,
            list: temp
        }
    }
    else {
        return state;
    }
}
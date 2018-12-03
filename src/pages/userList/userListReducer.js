import { FETCH_USER_INITIATE, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "./userListActions";

const initialState = {
  fetching: false,
  dog: null,
  error: null,
  success:false
};

export function userListReducer(state = initialState, action) {
  switch (action.type) {
   
    case FETCH_USER_INITIATE:
      console.log(" FETCH_USER_INITIATE")
      return { ...state,fetching: true, error: false, success:false };

    case FETCH_USER_SUCCESS:
      console.log(" FETCH_USER_SUCCESS")
      return { ...state,fetching: false, error: false, success:true };

    case FETCH_USER_FAILED:
      console.log(" FETCH_USER_FAILED")
      return { ...state, fetching: false, error: true, success:false};

    default:
      return state;
  }
}


// export const userListReducer = (state = initialState, action) => {
//     if (action.type === FETCH_USERS) {
//         console.log("we got",action);   
//         return state;
//     }
//     else {
//         return state;
//     }
// }





// import { ADD_TODO, SUB_TODO } from "./UserListActions";

// const initialState = {
//     counter: 1,
//     list: [
//         { todoText: "qqq", counter: 1 },
//         { todoText: "www", counter: 2 },
//         { todoText: "eee", counter: 3 },
//         { todoText: "rrr", counter: 4 },
//     ]
// }

// export const todoReducer = (state = initialState, action) => {
//     if (action.type === ADD_TODO) {
//         return {
//             counter: state.counter + 1,
//             list: [...state.list, { todoText: action.payload.value, counter: state.counter }]
//         }
//     }

//     if (action.type === SUB_TODO) {
//         let temp = state.list.filter(x => x.counter !== action.payload.value)
//         return {
//             ...state,
//             list: temp
//         }
//     }
//     else {
//         return state;
//     }
// }

import { FETCH_USER_INITIATE, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "./userListActions";

const initialState = {
  fetching: false,
  users: null,
  error: null,
  success: false
};

export function userListReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_USER_INITIATE:
      console.log(" FETCH_USER_INITIATE")
      return { ...state, fetching: true, error: false, success: false };

    case FETCH_USER_SUCCESS:
      console.log(" FETCH_USER_SUCCESS", action.payload)
      return { ...state, fetching: false, error: false, success: true, users: action.payload };

    case FETCH_USER_FAILED:
      console.log(" FETCH_USER_FAILED")
      return { ...state, fetching: false, error: true, success: false };

    default:
      return state;
  }
}


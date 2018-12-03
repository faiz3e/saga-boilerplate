
import React from 'react';
import { connect } from 'react-redux'

import './UserList.css';
import { FETCH_USERS } from './userListActions';

export const UserListComponent = (props) => {
  console.log("pp:", props)
  return (
    <div className='Middle'>
      <p>UserList</p>
      <br />

      <button onClick={() => {
        props.dispatch({ type: FETCH_USERS }) //? dispatch fetching action
      }}>Get UserList</button>
      <br />

    </div>
  )
}

const mapStateToprops = (state) => {
  return {
    UserList: state.UserReducer
  }
}

const mapDispatchToprops = (dispatch) => ({
  dispatch
})

export const UserList = connect(mapStateToprops, mapDispatchToprops)(UserListComponent)





// {props.UserList.list && props.UserList.list.map((item) => {
  //   return (
    //     <div key={item.counter}>{
      //       <p onClick={() => {
        //       }}>
        //         {item.counter} : {item.UserListText}
//         <button style={{ marginLeft: 20 }}> delete </button>
//       </p>
//     }</div>
//   )})
// }






import React from 'react';
import { connect } from 'react-redux'
import './UserList.css';
import { FETCH_USERS } from './userListActions';
import { Avtar } from '../../common/components';

export const UserListComponent = (props) => {
  return (
    <div className='Middle'>
      <p>UserList</p>
      <br />

      <button onClick={() => {
        props.dispatch({ type: FETCH_USERS }) //* dispatch fetching action
      }}>Get UserList</button>
      <br />

      {props.userList && props.userList.map((item,key) => {
        return (
          <div key={key}>
            <p>{item.id&&item.id}---{item.first_name&&item.first_name}---{item.last_name && item.last_name}</p> 
            <Avtar img={item.avatar}/>
          </div>
        )
      })
      }

    </div>
  )
}

const mapStateToprops = (state) => {
  console.log("mapStateToprops",state);
  
  return {
    userList: state.userListReducer.users
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





import React, { useReducer } from "react"
import UserReducer from "../user/UserReducer.js"
import userContext from "./UserContext.js"
import axios from "axios"


const UserState = (props) => {

  const initialState = {
    users: [],
    selectedUser: null
  }
    
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users")
    dispatch({
      type:"GET_USERS",
      payload: res.data.data
    })
  }
    
  const getProfile = async (id) => {
    const res = await axios.get("https://reqres.in/api/users/" + id )
    dispatch ({
      type:"GET_PROFILE",
      payload: res.data.data
    })
  }
    
  return (
    <userContext.Provider value={{
      users: state.users,
      selectedUser : state.selectedUser,
      getUsers,
      getProfile
    }}>
      {props.children}
    </userContext.Provider>

  );
}

export default UserState;
 

//aca tengo que datos estan inicialmente en la app   
//  const initialState = {
//    users: [],
//    selectedUser: null
//  }
// - las funciones q actualizan esos datos -
//const getUsers = async () => {
//  const res = await axios.get("https://reqres.in/api/users")
// - se llama al dispatch que ejecuta al reducer lo  q nos dice q se va a hacer al final-
//    dispatch({
//    type:"GET_USERS",
//    payload: res.data.data
//  })
// y el provider que nos permite colocar todo los componenteS que quieran ingresar a este contexto, simplemente lo colocamos adentro
// <userContext.Provider value={{
//  users: state.users,
//  selectedUser : state.selectedUser,
//  getUsers,
//  getProfile
//}}>
//  COMPONENTE = {props.children}
//</userContext.Provider>
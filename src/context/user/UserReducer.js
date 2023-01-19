import { GET_USERS, GET_PROFILE } from "../Types";

// payload=datos q me pasan

export default (state, action) => {
  const {payload, type }= action;

  switch(type){
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload
      }
    default:
      return state;
  }

}

//aca defino que es lo q se va a hacer cuando ejecutamos determinado nombre o funcionalidad
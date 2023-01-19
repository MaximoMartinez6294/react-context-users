import React, { useEffect }from 'react'
import { useContext } from 'react'
import UserContext from "../context/user/UserContext";
import UserState from '../context/user/UserState';

const Userlist = () => {

  const { users, getUsers, getProfile } = useContext(UserContext)

  useEffect(() => {
    getUsers();

  }, [])
  
  //lo de "img-fluid mr-4 reounded-circle" es de boostrap "flex row= horizontalidad" "justify-content-start= para que esten al inicio"

  return (
    <div className="list-group h-100">
      {
        users.map(user => ( 
            <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={user.id} onClick={() => getProfile(user.id)} >
              <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" />
              <p>
                {`${user.first_name} ${user.last_name}`}
              </p>
            </a>
          )
        )
      }
    </div>
  )
}

export default Userlist
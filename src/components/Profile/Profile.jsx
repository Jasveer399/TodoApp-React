import React,{useContext} from 'react'
import UserContext from '../../Contexts/User/UserContext'

function Profile() {

   const{user}=useContext(UserContext); 
  return (
    <div>Profile userName :- {user.username} And Password is:- {user.password}</div>
  )
}

export default Profile
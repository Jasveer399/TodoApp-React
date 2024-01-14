import React, { useState } from 'react'
import UserContext from '../../Contexts/User/UserContext'

export default function UserContextProvider({children}) {

    const [user,setuser]=useState("");
  return (
       <UserContext.Provider value={{user,setuser}}>
        {children}
       </UserContext.Provider>
  )
}

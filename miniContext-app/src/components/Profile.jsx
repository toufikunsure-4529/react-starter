import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Profile() {
  const {user}=useContext(UserContext)
  if(!user){
    return (
      <h3>Please Login to continue</h3>
    )
  }
  else{
    return (
      <h3>Welcome {user.userName.slice(0,6).toUpperCase()}</h3>
    )
  }
}

export default Profile
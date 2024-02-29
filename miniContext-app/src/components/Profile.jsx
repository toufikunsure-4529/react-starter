import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
  const {user}=useContext(UserContext)
  if(!user){
    return <div>Please Login and Continue</div> //conditional rendaring if username not input showing component 
  }
  else{
    return <div>Welcome {user.userName.slice(0,6).toUpperCase()}</div> //user input to show this component div
  }
}

export default Profile

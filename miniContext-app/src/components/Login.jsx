import React, { useContext, useState } from 'react'
import '../App.css'
import UserContext from '../context/userContext'

function Login() {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState('')
  const {setUser}=useContext(UserContext) //useContext is a hooks responsibiliy set a value for context 
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!userName && !password){
      
    }
    else{
      setUser({userName,password}) //userContext under state pass and we in this component data set for user context set using useContext hooks
    }
  }
  
  return (
    <div className='container'>
      <h2>Login</h2>
      <div className='loginContainer'>
      <input type="text" placeholder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login

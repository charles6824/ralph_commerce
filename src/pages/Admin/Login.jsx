import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const HandleDashBoard = () => {
    navigate('/dashboard')
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={HandleDashBoard}>test</button>
    </div>
  )
}

export default Login

import React from 'react'
import LoginForm from '../components/Signup/Login';

function Login() {
  return (
    <div>
      <LoginForm/>
      <Link to="/signup">
        Create Your New Account
      </Link>
    </div>
  )
}

export default Login

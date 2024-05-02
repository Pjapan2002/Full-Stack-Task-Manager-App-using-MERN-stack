import React from 'react'
import './SignupStyle.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='signup'>
      <h1>Login</h1>
      <form action="/login" method='Post'>
        <input type="text" name='name' id='name' placeholder='username' />
        <input type="email" name='email' id='email' placeholder='email' />
        <input type="password" name='password' id='password' placeholder='password'/>
        <input type="submit" value="Login" />
        <h5>if you not yet create account? <Link to='/signup'>Create Account</Link></h5>
      </form>
    </div>
  )
}

export default Login

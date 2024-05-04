import React from 'react'
import './SignupStyle.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    const userData = {
      "username": e.target.username.value,
      "email": e.target.email.value,
      "password": e.target.password.value
    }

    const user = await axios({
      method: 'post',
      'url': '/api/v1/user/login',
      'data': userData
    })

    location.reload();
  }

  return (
    <div className='signup'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name='username' id='username' placeholder='username' />
        <input type="email" name='email' id='email' placeholder='email' />
        <input type="password" name='password' id='password' placeholder='password'/>
        <input type="submit" value="Login" />
        <h5>if you not yet create account? <Link to='/signup'>Create Account</Link></h5>
      </form>
    </div>
  )
}

export default Login;

import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method='Post'>
        <input type="text" name='name' id='name' placeholder='username' />
        <input type="email" name='email' id='email' placeholder='email' />
        <input type="password" name='password' id='password' placeholder='password'/>
      </form>
    </div>
  )
}

export default Login

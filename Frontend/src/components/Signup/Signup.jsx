import React from 'react'

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form action="/signup" method='Post'>
        <input type="text" name='name' id='name' placeholder='username' />
        <input type="Date" name='dateOfBirth' id='dateOfBirth' />
        <input type="radio" name='gender'>Male</input>
        <input type="radio" name='gender'>Female</input>
        <input type="email" name='email' id='email' placeholder='email' />
        <input type="password" name='password' id='password' placeholder='password'/>
      </form>
    </div>
  )
}

export default Signup

import React from 'react'
import './SignupStyle.css';

function Signup() {
  return (
    <div className='signup'>
      <h1>Signup</h1>
      <form >
        <input type="text" name='name' id='name' placeholder='username' />
        <input type="Date" name='dateOfBirth' id='dateOfBirth' />
        <div>
          <label htmlFor="male">Male</label>
          <input type="radio" name='gender' id='male'/>
          <label htmlFor="female">Female</label>
          <input type="radio" name='gender' id='female' />
        </div>
        <input type="email" name='email' id='email' placeholder='email' />
        <input type="password" name='password' id='password' placeholder='password' />

        <input type="submit" value='Signup' />
      </form>
    </div>
  )
}

export default Signup

import React from 'react'
import './SignupStyle.css';
import axios from 'axios';
function Signup() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target, "\n", e.target.gender.value);
    const userData = {
      "fullname": e.target.name.value,
      "dateOfBirth": e.target.dateOfBirth.value,
      "gender": e.target.gender.value,
      "email": e.target.email.value,
      "username": e.target.username.value,
      "password": e.target.password.value
    }

    const user = await axios({
      method: 'post',
      'url': '/api/v1/user/signup',
      'data': userData
    })

    location.reload();

  }


  return (
    <div className='signup'>
      <h1>Signup</h1>
      <form onSubmit={ (e) => handleSubmit(e) }>

        <input type="text" name='name' id='name' placeholder='Full Name' required/>
        <div className='dobgen'>
          <input type="Date" name='dateOfBirth' id='dateOfBirth' required/>
          <label htmlFor="male">Male</label>
          <input type="radio" name='gender' value='Male' id='male'/>
          <label htmlFor="female">Female</label>
          <input type="radio" name='gender' value='Female' id='female' />
        </div>
        <input type="email" name='email' id='email' placeholder='Email' required/>
        <input type="text" name='username' id='username' placeholder='Username' required minLength='4' />
        <input type="password" name='password' id='password' placeholder='Password' minLength='4' maxLength='8' required/>
        <input type="submit" value='Signup' />

      </form>
    </div>
  )
}

export default Signup

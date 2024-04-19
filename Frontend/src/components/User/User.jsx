import React from 'react'
import './UserStyle.css';

function User() {

    const name = "Name";
    
  return (
    <div className='user'>
      <img src="./Avatar" alt="Avatar" />
      <div>{name}</div>
    </div>
  )
}

export default User

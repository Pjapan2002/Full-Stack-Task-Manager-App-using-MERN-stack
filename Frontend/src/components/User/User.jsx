import React from 'react'
import './UserStyle.css';
import male from '../../assets/male-avatar.png';
import female from '../../assets/female-avatar.png';
function User() {

    const name = "Name";
    
  return (
    <div className='user'>
      <img src={female} alt="userAvatar" />
      <div className='userName'>{name}</div>
    </div>
  )
}

export default User

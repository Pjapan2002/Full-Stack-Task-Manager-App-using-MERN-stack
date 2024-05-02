import React from 'react'
import './profilestyle.css'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='devProfile'>
      <h3>Develope By</h3>
      <h4>Japan Patel</h4>
      <p>You can follow on</p>
      <span> <Link to='https://www.instagram.com/japan_patel_7' target='_blank'><i class="fa-brands fa-square-instagram"></i></Link> </span>
      <span> <Link to='https://www.facebook.com/japankumar.patel.14' target='_blank'><i class="fa-brands fa-square-facebook"></i></Link> </span>
      <span> <Link to='https://www.linkedin.com/in/japan-patel-093527219' target='_blank'><i class="fa-brands fa-linkedin"></i></Link> </span>
      <span> <Link to='https://github.com/Pjapan2002' target='_blank'><i class="fa-brands fa-square-github"></i></Link> </span>
      <button>
        <Link to='https://github.com/Pjapan2002/Full-Stack-Task-Manager-App-using-MERN-stack' target='_blank'>
        <i class="fa-solid fa-eye"></i>
        View the Source-Code
        </Link>
      </button>
    </div>
  )
}

export default Profile

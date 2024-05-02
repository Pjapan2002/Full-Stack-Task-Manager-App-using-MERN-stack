import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>ToDo</h1>
        <h1>.</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/viewtask'>View Task Lists</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact us</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className='logoutbtn'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './ContactusStyle.css';

function Contactus() {
  return (
    <div className='contactForm'>
      <h1>Contact us</h1>
      <form action="/contactus" method='post'>
        <input type="text" name='name' id='name' placeholder='username' />
        <input type="email" name='email' id='email' placeholder='email' />
        <textarea id='msg' name='msg' rows='8' placeholder='Message'/>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  )
}

export default Contactus

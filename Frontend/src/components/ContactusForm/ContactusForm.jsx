import React from 'react'
import './contactusFormstyle.css';

function ContactusForm() {
  return (
    <div className='contactForm'>
      <form action="/contactus" method='post'>
        <input type="text" name='name' id='name' placeholder='fullname' />
        <input type="email" name='email' id='email' placeholder='email' />
        <textarea id='msg' name='msg' rows='8' placeholder='Message'/>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  )
}

export default ContactusForm

import React from 'react';
import './ContactusStyle.css';
import ContactusForm from '../../components/ContactusForm/ContactusForm.jsx';
import Profile from '../../components/ContactusForm/Profile.jsx';

function Contactus() {
  return (
    <div className='contactusPage'>
      <h1>Contact us</h1>
      <div className='contactusPageComp'>
        <Profile />
        <ContactusForm />
      </div>
    </div>
  )
}

export default Contactus

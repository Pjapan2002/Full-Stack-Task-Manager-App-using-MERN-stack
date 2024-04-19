import React, { useState } from 'react'
import './TodoFormStyle.css';

function TodoAddForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  return (
    <div className='todoForm'>
      <form action='/' method='Post'>
        <input 
         type='text'
         name='title'
         id='title'
         placeholder='Enter the Task...'
         onChange={(e) => setTitle(e.target.value)}
         />
        <textarea
         name='description'
         id='description'
         placeholder='Enter Short Description...'
         rows='5'
         onChange={(e) => setDescription(e.target.value)}
        />
        <input
         type='submit'
         value='Submit'
         id='submitBtn'
        />
      </form>
    </div>
  )
}

export default TodoAddForm

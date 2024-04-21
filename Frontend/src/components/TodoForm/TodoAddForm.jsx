import React, { useState } from 'react'
import './TodoFormStyle.css';
import { useDispatch } from 'react-redux';
import {addTodo} from '../../TodoFeatures/todoSlice.js'
function TodoAddForm() {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodoHandler = (e) => {
      e.preventDefault();
      const input = {
        title: title,
        description: description
      }
      dispatch(addTodo(input));
      setTitle("");
      setDescription("");
    }

  return (
    <div className='todoForm'>
      <form action='/' method='Post'>
        <input 
         type='text'
         name='title'
         id='title'
         value={title}
         placeholder='Enter the Task...'
         onChange={(e) => setTitle(e.target.value)}
         />
        <textarea
         name='description'
         id='description'
         value={description}
         placeholder='Enter Short Description...'
         rows='5'
         onChange={(e) => setDescription(e.target.value)}
        />
        <input
         type='submit'
         value='Submit'
         id='submitBtn'
         onClick={addTodoHandler}
        />
      </form>
    </div>
  )
}

export default TodoAddForm

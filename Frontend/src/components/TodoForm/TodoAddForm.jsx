import React, { useEffect, useState } from 'react'
import './TodoFormStyle.css';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodoData } from '../../TodoFeatures/todoSlice.js';
import axios from 'axios';

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

    axios({
      method: 'post',
      url: '/api',
      data: input
    });

    dispatch(addTodo(input));
    setTitle("");
    setDescription("");
  }
  
  useEffect( () => {
    // console.log("hello");
    dispatch(fetchTodoData());
    // const data = fetchTodoData();
    // console.log(data);
  }, [dispatch] )

  return (
    <div className='todoForm'>
      <form action='/api' method='Post' onSubmit={addTodoHandler}>
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
        />
      </form>
    </div>
  )
}

export default TodoAddForm

import React, { useEffect, useState } from 'react'
import './TodoFormStyle.css';
import { useDispatch } from 'react-redux';
import { addTodo, fetchtodoTask } from '../../TodoFeatures/todoSlice.js';
import axios from 'axios';

function TodoAddForm() {

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   dispatch(fetchtodoTask())
  // })

  const addTodoHandler = async (e) => {
    e.preventDefault();

    if(title === ""){
      alert("Please enter the title of the task!");
      return;
    }

    const inputData = {
      taskStatus: true,
      title: title,
      description: description
    }
    
    dispatch(addTodo(inputData));

    const createdTask = await axios({
      method: 'post',
      'url': 'api/v1/task/todos',
      'data': inputData
    })
    
    // dispatch(fetchtodoTask())
    // console.log(createdTask);

    setTitle("");
    setDescription("");

  }
  
  return (
    <div className='todoForm'>
      <form >
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
          value='Add New Task'
          id='submitBtn'
          onClick={addTodoHandler}
        />
      </form>
    </div>
  )
}

export default TodoAddForm

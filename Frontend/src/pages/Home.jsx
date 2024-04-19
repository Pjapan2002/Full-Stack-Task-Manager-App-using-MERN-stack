import React from 'react'
import User from '../components/User/User';
import TodoAddForm from '../components/TodoForm/TodoAddForm';
import './HomeStyle.css';

function Home() {
  return (
    <div className='home'>
      <User/>
      <TodoAddForm/>
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import './TodoComStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../TodoFeatures/todoSlice.js';

function TodoCom() {

    const todos = useSelector(state => state.todos);

    // console.log(todos);
    const dispatch = useDispatch();

    return (
        <div className='todoList'>
            <ul>
            {
                todos.map( (todo) => {

                    const [title, setTitle] = useState(todo.title);
                    const [description, setDescription] = useState(todo.description);
                    const [editBtn, setEditBtn] = useState(true);

                    return (
                        <li key={todo.id}>
                            <input 
                            id='todoHeading'
                            type="text"
                            value={title}
                            readOnly={editBtn}
                            onChange={(e) => setTitle(e.target.value)} 
                            />
                            <hr />
                            <textarea 
                            id='todoDes'
                            type="text"
                            value={description}
                            readOnly={editBtn} 
                            onChange={(e) => setDescription(e.target.value)}
                            />
                            <hr />
                            <div className='btn'>
                                <button onClick={() => setEditBtn(!editBtn)}>edit</button>
                                <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
                            </div>
                        </li>
                    )
                })
            }
            </ul>

        </div>

    )
}

export default TodoCom

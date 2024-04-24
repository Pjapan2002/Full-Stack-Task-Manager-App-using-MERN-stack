import React, { useCallback, useEffect, useState } from 'react'
import './TodoComStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, fetchTodoData, deleteTodoData } from '../../TodoFeatures/todoSlice.js';

function TodoCom() {

    const todos = useSelector(state => state.todos);
    
    // console.log(todos);
    const dispatch = useDispatch();

    const removeTodo = useCallback((id) => {
        // console.log(id);
        dispatch(deleteTodoData(id));
        dispatch(deleteTodo(id));
        // dispatch(fetchTodoData());
    }, [dispatch])
    
    useEffect( () => {
        dispatch(fetchTodoData());
      }, [dispatch] )


    return (
        <div className='todoList'>
            <ul>
            {
                todos?.map( (todo) => {

                    const [title, setTitle] = useState(todo.title);
                    const [description, setDescription] = useState(todo.description);
                    const [editBtn, setEditBtn] = useState(true);
                    
                    // console.log(todo._id);

                    return (
                        <li key={todo._id}>
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
                                <button onClick={() => {
                                    setEditBtn(!editBtn);
                                    }}>edit</button>
                                <button onClick={() => removeTodo(todo._id)}>delete</button>
                                
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

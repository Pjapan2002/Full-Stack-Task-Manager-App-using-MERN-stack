import React, { useCallback, useEffect, useState } from 'react'
import './TodoComStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../TodoFeatures/todoSlice.js';


function TodoCom() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // const [todoes, setTodoes] = useState([]);
    const [editBtn, setEditBtn] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const removeTodo = (id) => {
        try {
            dispatch(deleteTodo(id));
        } catch (error) {
            return console.log("Error: while deleting todo from Todos.", error);
        }
    }

    const updateTodo = (_id) => {
        // console.log(todo._id);
        try {
            dispatch(editTodo({ _id, title, description }));
            setEditBtn(!editBtn);
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log("Error: Editing todo from Todos.", error);
        }
    }


    return (
        <div className='todoList' >
            <ul>
                {

                    todos?.map((todo) => {
                        
                        return (
                            <li key={todo._id} >
                                <input
                                    id='todoHeading'
                                    type="text"
                                    value={ (title)? title: todo.title }
                                    readOnly={ editBtn }
                                    onDoubleClick={ () => setEditBtn(!editBtn) }
                                    onChange={ (e) => {
                                        setTitle(e.target.value);
                                    } }
                                />
                                <hr />
                                <textarea
                                    id='todoDes'
                                    type="text"
                                    value={ (description)? description: todo.description }
                                    readOnly={ editBtn }
                                    onDoubleClick={ () => setEditBtn(!editBtn) }
                                    onChange={ (e) => {
                                        setDescription(e.target.value);
                                    } }
                                />
                                <hr />
                                <div className='btn'>
                                    <button onClick={ () => updateTodo(todo._id) }>edit</button>
                                    <button onClick={ () => removeTodo(todo._id) }>delete</button>
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

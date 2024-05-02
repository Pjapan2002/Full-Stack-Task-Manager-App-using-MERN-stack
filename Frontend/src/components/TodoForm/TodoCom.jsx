import React, { useCallback, useEffect, useState } from 'react'
import './TodoComStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../TodoFeatures/todoSlice.js';


function TodoCom() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // const [todos, setTodos] = useState(useSelector(state => state.todos));
    const [editBtn, setEditBtn] = useState(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleEditFun = (currTodo) => {
        setEditBtn(!editBtn)
        // console.log(editElem)
        // console.log(currTodo);
        setTitle(currTodo.title)
        setDescription(currTodo.description)
    }
   
    function statusUpdateFun(todo, todoStatus) {
        const currStatus = document.querySelector(`#todostatusText${todo}`);

        if (!todoStatus) {
            currStatus.innerHTML = "pending";
        } else {
            currStatus.innerHTML = "Completed";
        }
    }

    const removeTodo = (id) => {
        try {
            dispatch(deleteTodo(id));
        } catch (error) {
            return console.log("Error: while deleting todo from Todos.", error);
        }
    }

    const updateTodo = (id) => {
        // console.log(id, "\n", title, "\n", description);
        dispatch(editTodo({id,title,description}));
        setEditBtn(!editBtn);
        // console.log({id,title,description});
        // setTodos((prevTodos) => (
        //     prevTodos._id === id ? (!title) : prevTodos
        // ))
    }


    return (
        <div className='todoList' >
            <ul>
                {

                    todos?.map((todo) => {

                        return (
                            <li key={todo._id}>
                                <div className='todo_Status'>
                                    <input
                                        id={todo._id}
                                        type='checkbox'
                                        check='false'
                                        onChange={ (e) => statusUpdateFun(todo._id,e.target.checked) }
                                    />
                                    <label
                                        className='todoStatus'
                                        id={`todostatusText${todo._id}`}
                                        htmlFor='todoStatus'
                                    >
                                    pending
                                    </label>
                                </div>
                                
                                <input
                                    id='todoHeading'
                                    type="text"
                                    value={ (editBtn) ? todo.title : title}
                                    readOnly={editBtn}
                                    onDoubleClick={(e) => handleEditFun(todo) }
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                
                                <textarea
                                    id='todoDes'
                                    type="text"
                                    value={ (editBtn) ? todo.description : description }
                                    readOnly={editBtn}
                                    // onDoubleClick={() => setEditBtn(!editBtn)}
                                    onDoubleClick={(e) => handleEditFun(todo) }
                                    onChange= {(e) => setDescription(e.target.value)}
                                />
                                
                                <div className='btn'>
                                    <button onClick={() => updateTodo(todo._id)}>edit</button>
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

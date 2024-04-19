import React, { useState } from 'react'
import './TodoComStyle.css';

function TodoCom() {

    const [title, setTitle] = useState("Hello ....");
    const [description, setDescription] = useState("Hello ....");
    const [editBtn, setEditBtn] = useState(true);

    return (
        <div className='todoCom'>
            <div className='todos'>
            <input
                type="text"
                id='todo_title'
                value={title}
                readOnly={editBtn}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                id='todo_description'
                value={description}
                rows='5'
                readOnly={editBtn}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div className='btn'>
                <button onClick={() => setEditBtn(false)}  className='updateBtn'>Edit</button>
                <button onClick={() => DeleteTodo} className='updateBtn'>Delete</button>
            </div>
        </div>
    )
}

export default TodoCom

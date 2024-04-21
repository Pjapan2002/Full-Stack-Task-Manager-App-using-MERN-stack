import TodoContent from '../models/todoContent.model.js';
import Todo from '../models/todoContent.model.js';
// import User from '../models/user.model.js';

export async function handleGet(req, res) 
{
    const todos = await Todo.find({});
    // console.log(todos);
    res.json(todos)
}

export async function handlePost(req, res) 
{   
    // console.log(req);
    const {title, description} = req.body;
        
    await TodoContent.create(
        {
            title,
            description
        }
    )
    
    // res.send('Todo task added successfully!!!');
    res.redirect('http://localhost:5173/');
}
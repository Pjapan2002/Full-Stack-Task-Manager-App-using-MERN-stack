import TodoContent from '../models/todoContent.model.js';
// import Todo from '../models/todo.model.js';
// import User from '../models/user.model.js';

export async function handleGet(req, res) 
{
    const todo = await Todo.find({});
    
    res.json(todo);
}

export async function handlePost(req, res) 
{
    const {title, description} = req.body;
        
    await TodoContent.create(
        {
            title,
            description
        }
    )
    
    res.send('Todo task added successfully!!!');
}
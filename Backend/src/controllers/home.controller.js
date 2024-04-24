import TodoContent from '../models/todoContent.model.js';
import Todo from '../models/todoContent.model.js';

export async function handleHomeGet(req, res) 
{
    const todos = await Todo.find({});
    
    res.json(todos)
}

export async function handleHomePost(req, res) 
{   
    // console.log(req);
    // const {title, description} = req.body;

    // if(!(title || description))
    // {
    //     throw new Error(400,"Title or description are required.")
    // }
        
    // await TodoContent.create(
    //     {
    //         title,
    //         description
    //     }
    // )
    
    return res.status(201).json(
        201,
        "Add new Todo",
        "Success"
    )
    
}

export async  function handleHomeDelete(req,res) {

    const id = req.params.id;
    // console.log(id); 
    await TodoContent.findByIdAndDelete({_id : id});
    
    // return res.redirect('http://localhost:5173/');
    res.redirect('/api/todo/');
}

export async  function handleHomeEdit(req,res) {

    res.json(200,"Edit button");
}
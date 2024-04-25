import TodoContent from '../models/todoContent.model.js';
import Todos from '../models/todo.model.js';

export async function handleHomeGet(req, res) {
    const todos = await Todos.find({});

    res.json(todos)
}

export async function handleHomePost(req, res) {
    // console.log(req);
    const { title, description } = req.body;

    if (!(title || description)) {
        throw new Error(400, "Title or description are required.")
    }

    const newTodo = await TodoContent.create(
        {
            title,
            description
        }
    )

    const userTodosList = await Todos.findOne((todos) => todos.createdBy === req.user._id);

    if(!userTodosList)
    {
        await Todos.create({
            userTodos: [{newTodo},],
            createdBy: req.user._id
        })
    }
    else{
        userTodosList.userTodos.push( { newTodo } );
        await userTodosList.save({ validateBeforeSave: false });
    }

    res.status(201)
        .json(
            {
            "Status Code": 201,
            "data": userTodosList,
            "Message": "Successfully New Task created!"
            }
        )
}

export async function handleHomeDelete(req, res) {

    const id = req.params.id;
    // console.log(id); 
    if(!id){
        throw new Error(404, "Todo_id is required!");
    }

    await TodoContent.findByIdAndDelete(id);

    const userTodosList = await Todos.findOne((todos) => todos.createdBy === req.user._id);
    userTodosList.userTodos = userTodosList.userTodos.filter((todo) => todo._id !== id);
    await userTodosList.save();

    const updateUserTodos = await Todos.findOne((todos) => todos.createdBy === req.user._id);

    res.status(204)
        .json(
            {
            "Status Code": 204,
            "data": updateUserTodos,
            "Message": "Successfully Task deleted!"
            }
        )
}

export async function handleHomeEdit(req, res) {

    const id = req.params.id;
    const { taskstatus, title, description } = req.body;

    if( !title ){
        throw new Error(404, "Title of task is required!")
    }

    const todo = await TodoContent.findByIdAndUpdate(id,{
        taskstatus,
        title,
        description
    })

    const userTodosList = Todos.findOne( (todos) => todos.createdBy === req.user._id );

    userTodosList.userTodos.map( 
        function (todo) {
        if( todo._id === id){
            todo = this.todo;
        }
    })
    userTodosList.sava();

    const updateUserTodos = Todos.findById(this.userTodosList._id);
    
    res.status(205)
        .json(
            {
            "Status Code": 205,
            "data": updateUserTodos,
            "Message": "Successfully edited Task!"
            }
        )
}
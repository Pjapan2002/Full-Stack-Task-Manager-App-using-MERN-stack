import TodoContent from '../models/todoContent.model.js';
import Todos from '../models/todo.model.js';

export async function handleHomeGet(req, res) {
    const todos = await Todos.find({});

    res.json(todos)
}

export async function handleHomePost(req, res) {

    // console.log(req);
    const { title, description } = req.body;
    // console.log(title, "\n", description);

    if (!(title || description)) {
        throw new Error(400, "Title or description are required.")
    }

    const newTodo = await TodoContent.create(
        {
            title,
            description
        }
    )

    const todosList = await Todos.find({ createdBy : req.user._id });
    
    // console.log(!todosList);

    if(todosList.length === 0)
    {
        await Todos.create({
            createdBy: req.user._id
        })
    }
    
    const userTodosList = await Todos.findOneAndUpdate( { createdBy : req.user._id },
    {
        $push: { userTodos : newTodo}
    },
    {
        new: true      
    })
    
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

    const updateUserTodos = await Todos.findOneAndUpdate({ createdBy : req.user._id },
    {
        $pull: { userTodos : id }
    },
    {
        new: true,
    });

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
    }, { new : true })

    const updateUserTodos = await Todos.findOneAndUpdate( { createdBy : req.user._id }, 
    {
        $setOnInsert: { "userTodos.$[elem]._id" : todo._id, ...todo }
    } ,
    {
        arrayFilters: [ { "elem._id": todo._id } ]
    },
    {
        new: true
    });
    
    // console.log(typeof updateUserTodos);
    // userTodosList.userTodos.map( 
    //     function (todo) {
    //     if( todo._id === id){
    //         todo = this.todo;
    //     }
    // })
    // userTodosList.sava();

    // const updateUserTodos = Todos.findById(this.userTodosList._id);
    
    res.status(205)
        .json(
            {
            "Status Code": 205,
            "data": updateUserTodos,
            "Message": "Successfully edited Task!"
            }
        )
}
import TodoContent from '../models/todoContent.model.js';
import Todos from '../models/todo.model.js';

export async function handleHomeGet(req, res) {
    const todos = await Todos.find({});

    res.status(200)
       .json({
        "status code": 200,
        "length": todos.length,
        "data": todos
       })
}

export async function handleHomePost(req, res) {

    // console.log(req);
    const { title, description } = req.body;
    // console.log(title, "\n", description);

    if (!(title || description)) {
        res.status(400)
           .json({
            "status Code": 400,
            "Message": "Title or description are required."
           })
        return;
    }

    const newTodo = await TodoContent.create(
        {
            title,
            description
        }
    )

    const todosList = await Todos.find({ createdBy: req.user._id });

    // console.log(!todosList);

    if (todosList.length === 0) {
        await Todos.create({
            createdBy: req.user._id
        })
    }

    const userTodosList = await Todos.findOneAndUpdate({ createdBy: req.user._id },
        {
            $push: { userTodos: newTodo }
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
    if (!id) {
        res.status(404)
           .json({
            "status Code": 404,
            "Message": "Todo_id is required!"
           })
    }

    await TodoContent.findByIdAndDelete(id);

    const updateUserTodos = await Todos.findOneAndUpdate({ createdBy: req.user._id },
        {
            $pull: { userTodos: id }
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

    if (!title) {
        res.status(404)
           .json({
            "status Code": 404,
            "Message": "Title of task is required!"
           })
    }

    const updatetodo = await TodoContent.findByIdAndUpdate(id, {
        taskstatus,
        title,
        description
    }, { new: true })

    const updateUserTodos = await Todos.findOne({ createdBy: req.user._id });

    // console.log(updateUserTodos);

    res.status(200)
        .json(
            {
                "Status Code": 200,
                "data": updateUserTodos,
                "Message": "Successfully edited Task!"
            }
        )
}
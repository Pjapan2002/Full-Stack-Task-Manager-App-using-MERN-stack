import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoContentes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoContent'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
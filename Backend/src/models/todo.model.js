import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoContent'
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Todos = mongoose.model("Todos", todoSchema);
export default Todos;
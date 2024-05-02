import mongoose from "mongoose";

const todoContentSchema = new mongoose.Schema({
    taskstatusPending: {
        type: Boolean,
        default: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
}, { timestamps: true })

const TodoContent = mongoose.model("TodoContent", todoContentSchema);

export default TodoContent;
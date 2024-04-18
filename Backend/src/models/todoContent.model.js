import mongoose from "mongoose";

const todoContentSchema = new mongoose.Schema({
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
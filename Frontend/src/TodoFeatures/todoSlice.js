import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, title: "geatting", description: "Hello world"}]
}

export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            let todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo = {
                title: action.payload.title,
                description: action.payload.action
            }
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
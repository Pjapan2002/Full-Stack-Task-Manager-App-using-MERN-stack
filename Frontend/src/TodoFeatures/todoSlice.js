import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: () => {},
        deleteTodo: () => {},
        editTodo: () => {}
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
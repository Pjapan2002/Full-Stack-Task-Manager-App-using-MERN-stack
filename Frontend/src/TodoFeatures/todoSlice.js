import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        _id: nanoid(),
        taskStatus: action.payload.taskStatus,
        title: action.payload.title,
        description: action.payload.description
      }
      state.todos.push(todo)
    },
    deleteTodo: (state, action) => {

      state.todos = state.todos.filter((todo) => todo._id !== action.payload);

    },
    editTodo: (state, action) => {
      console.log(action.payload);
      state.todos.map( (todo) => {
        if( todo._id === action.payload._id)
        {
          todo.title = action.payload.title,
          todo.description = action.payload.description
        }
      })
    }
  },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
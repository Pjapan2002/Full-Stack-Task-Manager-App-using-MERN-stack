import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [{ id: 1, title: "geatting", description: "Hello world" }]
}

// const todos = () => {
//     axios.get('/api')
// }
export const fetchTodoData = createAsyncThunk(
    'Todos/fetchTodoData',
    async () => {
        
        const data = axios.get('/api')
                     .then((res) => res.data)
                     .catch(() => null)

        return data;
    }
  );

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
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTodoData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchTodoData.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
          })
          .addCase(fetchTodoData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectTodosLoading = (state) => state.todos.loading;
export const selectTodosError = (state) => state.todos.error;

export default todoSlice.reducer;
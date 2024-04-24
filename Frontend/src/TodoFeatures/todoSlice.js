import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [{ _id: 1, title: "geatting", description: "Hello world" }]
}


export const fetchTodoData = createAsyncThunk(
    'Todos/fetchTodoData',
    async () => {
        
        const data = axios.get('/api/todo')
                     .then((res) => res.data)
                     .catch(() => null)

        return data;
    }
  );

export const deleteTodoData = createAsyncThunk(
    'Todos/deleteTodoData',
    async (id) => {
        // console.log("hi");
        await axios({
            method: 'delete',
            url: `/api/todo/${id}`,
          });
        return fetchTodoData();
    }
  );

export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log("hello");
            const todo = {
                // _id: action.payload._id,
                title: action.payload.title,
                description: action.payload.description
            }
            return state.todos.push(todo)
        },
        deleteTodo: (state, action) => {

          // deleteTodoData(action.payload._id);
          state.todos = state.todos.filter((todo) => todo._id !== action.payload._id);
            
            // return state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            let todo = state.todos.find((todo) => todo._id === action.payload._id);
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
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  todos: []
}

export const fetchtodoTask = createAsyncThunk("fetchtodoT ask", async () => {
  const fetchtodos = await axios({
    method: 'get',
    url: 'api/v1/task/todos'
  })
  // console.log(fetchtodos.data.data);
  return fetchtodos.data.data;
})

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
      // console.log(action.payload);
      state.todos.map( (todo) => {
        if( todo._id === action.payload.id)
        {
          todo.title = action.payload.title,
          todo.description = action.payload.description
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtodoTask.pending, (state, action) => {
      state.isLoading = true;
    })

    builder.addCase(fetchtodoTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    })

    builder.addCase(fetchtodoTask.rejected, (state, action) => {
      state.isError = true;
      console.log("error: ", action.payload);
    })
  }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
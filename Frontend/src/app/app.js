import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../TodoFeatures/todoSlice.js';

export const store = configureStore({
    reducer: todoReducers,
})
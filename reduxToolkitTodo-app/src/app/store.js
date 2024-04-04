import { configureStore } from '@reduxjs/toolkit'; //configure store method
import { todoSlice } from '../features/todo/TodoSlice';

export const store=configureStore({
  reducer:todoSlice.reducer 
})
import { configureStore } from '@reduxjs/toolkit'; //configure store method
import { todoSlice } from '../features/todo/TodoSlice';

//store the state under reducer object proper globally access state
export const store = configureStore({
  reducer: todoSlice.reducer//redux-toolkit slice name to create state under reducer so this is intilized reducer under store future update funcatility will be work for reducer under store globally access state
})
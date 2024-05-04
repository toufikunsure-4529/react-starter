import { configureStore } from '@reduxjs/toolkit'; //configure store method
import authSlice from '../features/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // post: postSlice, //TODO to be update
  }
}
)
export default store
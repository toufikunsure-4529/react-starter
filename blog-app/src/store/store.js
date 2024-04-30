import { configureStore } from '@reduxjs/toolkit'; //configure store method
import authReducer from '../features/authSlice'; // Import as default

const store = configureStore({
  reducer: authReducer
}
)
export default store
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: false,
  userData: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true //when user disopatch this method to status changes
      state.userData = action.payload.userData
    },
    logout: (state, action) => {
      state.status = false
      state.userData = null
    },
  }
})

export default authSlice.reducer

export const { login, logout } = authSlice.actions;  //Under Reducer all methods are called a actions to we export actions
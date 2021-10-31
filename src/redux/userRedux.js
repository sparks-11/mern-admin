import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:"user",
  initialState: {
    currentUser: [],
    isFetching: false,
    isAdmin: false,
    img:"images/profile1.jpg",
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching =true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
      state.isAdmin = state.currentUser.isAdmin
      state.img = state.currentUser.img
      if (state.currentUser.status === "bad") {
        state.error = true
        state.currentUser = []
      } else {
        state.error = false
      }
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
      state.isAdmin= false
    },
    logoutStart: (state) => {
      state.currentUser = [];
      state.isAdmin = false;
      state.img = "images/profile1.jpg"
    },
  }
});

export const { loginStart, loginSuccess, loginFailure, logoutStart } = userSlice.actions;
export default userSlice.reducer;
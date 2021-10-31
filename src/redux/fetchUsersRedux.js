import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name:"users",
  initialState: {
    users: [],
    isFetching: false,
    error:false,
  },
  reducers: {
    // GET ALL
    getUsersStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false
      state.users = action.payload
    },
    getUsersFailure: (state) => {
      state.isFetching = false
      state.error = true 
    },
    // DELETE ACTION
    deleteUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload), 1);
    },
    deleteUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // UPDATE ACTION
    updateUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users[state.users.findIndex((item) => item._id === action.payload)] = action.payload.user;
    },
    updateUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // CREATE ACTION
    addUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    addUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUsersStart,
  deleteUsersFailure,
  deleteUsersSuccess,
  updateUsersStart,
  updateUsersSuccess,
  updateUsersFailure,
  addUsersStart,
  addUsersSuccess,
  addUsersFailure } = usersSlice.actions;

export default usersSlice.reducer;
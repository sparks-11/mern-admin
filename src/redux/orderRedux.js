import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name:"order",
  initialState: {
    orders: [],
    isFetching: false,
    error:false,
  },
  reducers: {
    // GET ALL
    getOrderStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false
      state.orders = action.payload
    },
    getOrderFailure: (state) => {
      state.isFetching = false
      state.error = true 
    },

    // DELETE ACTION
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload), 1);
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE ACTION
    updateOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders[state.orders.findIndex((item) => item._id === action.payload)] = action.payload.order;
    },
    updateOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderFailure,
  deleteOrderSuccess
} = orderSlice.actions;

export default orderSlice.reducer;
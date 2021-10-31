import { publicRequest, userRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess,  logoutStart } from "./userRedux"
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} from "./productRedux";
import {
  addUsersFailure,
  addUsersStart,
  addUsersSuccess,
  deleteUsersFailure,
  deleteUsersStart,
  deleteUsersSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  updateUsersFailure,
  updateUsersStart,
  updateUsersSuccess
} from "./fetchUsersRedux";
import {
  getOrderStart,
  getOrderFailure,
  getOrderSuccess,
  updateOrderStart,
  updateOrderFailure,
  updateOrderSuccess,
  deleteOrderStart,
  deleteOrderFailure,
  deleteOrderSuccess,
} from "./orderRedux";


// ADMIN lOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure());
  }
};
// ADMIN LOGOUT
export const logoutAdmin = async (dispatch) => {
  dispatch(logoutStart());
};


// PRODUCT ACTIONS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products/find");
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure());
  }
};


export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/delete/${id}`);
    dispatch(deleteProductSuccess(id))
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/update/${id}`,product);
    dispatch(updateProductSuccess({id, product}))
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/create`, product);
    dispatch(addProductSuccess(res.data.savedProduct));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

// USERS ACTIONS
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users/find");
    dispatch(getUsersSuccess(res.data))
  } catch (err) {
    dispatch(getUsersFailure());
  }
};


export const deleteUsers = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    await userRequest.delete(`/users/delate/${id}`);
    dispatch(deleteUsersSuccess(id))
  } catch (err) {
    dispatch(deleteUsersFailure());
  }
};

export const updateUsers = async (id, user, dispatch) => {
  dispatch(updateUsersStart());
  try {
    await userRequest.put(`/users/update/${id}`,user);
    dispatch(updateUsersSuccess({id, user}))
  } catch (err) {
    dispatch(updateUsersFailure());
  }
};

export const addUsers = async (user, dispatch) => {
  dispatch(addUsersStart());
  try {
    const res = await userRequest.post(`/auth/register`, user);
    dispatch(addUsersSuccess(res.data));
  } catch (err) {
    dispatch(addUsersFailure());
  }
};

// ORDERS ACTIONS
export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/orders/all");
    dispatch(getOrderSuccess(res.data))
  } catch (err) {
    dispatch(getOrderFailure());
  }
};


export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    await userRequest.delete(`/orders/delete/${id}`);
    dispatch(deleteOrderSuccess(id))
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrderStart());
  try {
    await userRequest.put(`/orders/update/${id}`,order);
    dispatch(updateOrderSuccess({id, order}))
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};




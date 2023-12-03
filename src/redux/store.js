const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const postSlice = require("./post/postSlice").default; // postSlice를 가져올 때 .default를 사용합니다.
const authSlice = require("./auth/authSlice").default; // authSlice를 가져올 때 .default를 사용합니다.

const rootReducer = combineReducers({
  postReducer: postSlice.reducer,
  authReducer: authSlice.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

const { configureStore } = require("@reduxjs/toolkit");
const { default: postSlice } = require("./postSlice");

const store = configureStore({
    reducer:{
        postReducer: postSlice.reducer,
    },
});

export default store;
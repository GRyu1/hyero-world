import { signIn } from "./authThunk";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        token:null,
        status:null,
        isLogin:false,
        isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(signIn.pending,(state)=>{state.isLoading=true});
        builder.addCase(signIn.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.token = action.payload.data;
            state.status = action.payload.status;
            state.isLogin = action.payload.status === 200;
        })
        builder.addCase(signIn.rejected,(state)=>{
            state.isLoading=false;
        })
    }
})

export default authSlice;
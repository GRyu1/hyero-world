import { signIn } from "./authThunk";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name:"authSlice",
    initialState:{
        token:null,
        status:null,
        isLogin:false,
        isLoading:false,
        isOwner:false,
    },
    reducers:{
        setIsLogin: (state, action) => {
            console.log(action);
            state.isLogin = action.payload;
        },
        setIsOwner: (state, action) => {
            console.log(action);
            state.isOwner = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(signIn.pending,(state)=>{state.isLoading=true});
        builder.addCase(signIn.fulfilled,(state,action)=>{
            console.log(state,action);
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

export const { setIsLogin , setIsOwner} = authSlice.actions;
export default authSlice;
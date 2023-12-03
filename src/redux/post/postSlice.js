import { ping } from './postThunk'
const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
    name:"postSlice",
    initialState:{
        postlist:[],
        categoryName:null,
        isLoading:false,
        pong:false
    },
    extraReducers: (builder)=>{
        builder.addCase(ping.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(ping.fulfilled, (state,action)=>{
            console.log(action);
            state.isLoading=false;
            console.log(action.payload === "pong");
            state.pong = action.payload === "pong";
        })
        builder.addCase(ping.rejected, (state)=>{
            state.isLoading=false;
        })
    }
});

export default postSlice;
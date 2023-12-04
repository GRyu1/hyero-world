import { getPostListByPageNo, ping } from './postThunk'
const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
    name:"postSlice",
    initialState:{
        postList:[],
        categoryName:null,
        isLoading:false,
        page:0,
        totalNum:0,
        pong:false
    },
    reducers: {
        setPage: (state, action) => {
            console.log(action);
            state.page = action.payload;
        },
        setCategory: (state, action) => {
            state.page = action.payload;
        },
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

        builder.addCase(getPostListByPageNo.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(getPostListByPageNo.fulfilled, (state,action)=>{
            console.log(action);
            state.totalNum = action.payload.data.totalPages;
            state.page = action.payload.data.page;
            state.postList = action.payload.data.postList;
            state.isLoading=false;
        })
        builder.addCase(getPostListByPageNo.rejected, (state)=>{
            state.isLoading=false;
        })
    }
});

export const { setPage, setCategory } = postSlice.actions;
export default postSlice;
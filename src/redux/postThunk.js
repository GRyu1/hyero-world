import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_BASE_URL = "http://localhost:8080";

export const ping = createAsyncThunk("postSlice/ping", async () => {
    const resp = await axios.get(`${SERVER_BASE_URL}/pong`)
    return resp
});

export const createPost = createAsyncThunk();
export const updatePost = createAsyncThunk();
export const deletePost = createAsyncThunk();
export const getPostTotalCount = createAsyncThunk();
export const getPostListByPageNo = createAsyncThunk();
export const getPostListByCategoryNameAndPageNo = createAsyncThunk();
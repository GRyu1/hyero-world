import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_BASE_URL = "http://localhost:8080";

export const ping = createAsyncThunk("postSlice/ping", async () => {
    const resp = await axios.get(`${SERVER_BASE_URL}/ping`);
    const status = resp.status
    const data = resp.data
    return { data, status }
});

export const createPost = createAsyncThunk("postSlice/createPost", async ({title, content, thumbnailURL, category}) => {
    const resp = await axios.post(`${SERVER_BASE_URL}/api/post`,
    {title,content,thumbnailURL,category},{headers: {'Authorization':sessionStorage.getItem('auth')}})
    
    return resp.status
});

export const updatePost = createAsyncThunk("postSlice/updatePost", async ({title, content, thumbnailURL, category}) => {
    const resp = await axios.put(`${SERVER_BASE_URL}/api/post`,
    {title,content,thumbnailURL,category},{headers: {'Authorization':sessionStorage.getItem('auth')}})
    
    return resp.status
});

export const deletePost = createAsyncThunk("postSlice/deletePost");

export const getPostListByPageNo = createAsyncThunk("postSlice/getPostListByPageNo", async (page) => {
    const resp = await axios.get(`${SERVER_BASE_URL}/api/post?page=${page}`)
    const status = resp.status
    const data = resp.data
    return {data, status}
});

export const getPostListByCategoryNameAndPageNo = createAsyncThunk();
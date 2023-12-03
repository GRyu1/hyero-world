import { createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_BASE_URL = "http://localhost:8080";

export const signIn = createAsyncThunk("authSlice/signin", async () => {
    const resp = await axios.post(`${SERVER_BASE_URL}/api/auth`,{})
    const status = resp.status
    const data = resp.data
    return {data, status}
});
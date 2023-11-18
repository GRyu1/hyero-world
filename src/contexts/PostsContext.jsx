import axios from 'axios';
import React, { createContext, useState } from 'react'

export const PostsContext = createContext();
const ServerURL = "http://localhost:8080"


const PostContextProvider = (props) => {
    const [postList, setPostList] = useState([]);
    const [totalNum, setTotalNum] = useState(0);
    const [currentPage , setCurrentPage] = useState(1);
    const [category, setCategory] = useState();

    const getPost = async (id) => {
      return await axios.get(ServerURL + `/${id}`)
    }
    
    const getPosts = async (pageNo, category) => {
      return await axios.get(ServerURL+"/")
    }

    const getTotalNum = async () => {
      return await axios.get(ServerURL+"/")
    }


    const value = {
        states : {postList,totalNum,currentPage,category},
        actions : {setPostList,setTotalNum,setCurrentPage,getPost,getPosts,getTotalNum,setCategory}
    }
    
  return (
    <PostsContext.Provider value={value}>{props.children}</PostsContext.Provider>
  )
}

export default PostContextProvider
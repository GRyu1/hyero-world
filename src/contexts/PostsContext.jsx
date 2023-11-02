import React, { useContext, useState } from 'react'

export const PostsContext = useContext();
const ServerURL = "http://localhost:8080"


const PostsContext = (props) => {
    const [postList, setPostList] = useState([]);
    const [totlaNum, setTotalNum] = useState(0);
    const [currentPage , setCurrentPage] = useState(1);

    const getPost = (id) => {
    }
    
    const getPosts = (pageNo, category) => {
    }

    const value = {
        states : {postList,totlaNum,currentPage},
        actions : {setPostList,setTotalNum,setCurrentPage,getPost,getPosts}
    }
    
  return (
    <PostsContext.Provider value={value}>{props.children}</PostsContext.Provider>
  )
}

export default PostsContext
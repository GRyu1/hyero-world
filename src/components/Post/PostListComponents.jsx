import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPostListByPageNo } from 'redux/post/postThunk';
import PostThumnail from './PostThumnail';
import { Link } from 'react-router-dom';

const PostListComponents = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(0);
  const { postList , totalNum } = useSelector((state)=> state.postReducer );

  useEffect(()=>{
    dispatch(getPostListByPageNo(page))
    console.log(postList);
  },[category, page]);

  return (
    <>
      {postList && postList.slice().reverse().map((post,idx)=>{
        return <Link to={`/posts/${post.id}`} state={post}><PostThumnail key={idx} src={post.thumbnailURL}></PostThumnail></Link>
      })}
    </>
  )
}

export default PostListComponents
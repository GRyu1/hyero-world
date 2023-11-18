import { PostsContext } from 'contexts/PostsContext';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetailComponents = () => {
  let { id } = useParams();
  const [post , setPost] = useState();
  const {
    states : {},
    actions : {getPost},
  } = useContext(PostsContext)

  useEffect(()=>{
    getPost(id)
    .then((resp)=>{
      setPost(resp.data)
    })
    .catch((err)=>{console.log(err)})
  },[])

  return (
    <div>PostDetailComponents</div>
  )
}

export default PostDetailComponents
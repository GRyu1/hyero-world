import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetailComponents = () => {
  let { id } = useParams();
  const [post , setPost] = useState();

  return (
    <div>PostDetailComponents</div>
  )
}

export default PostDetailComponents
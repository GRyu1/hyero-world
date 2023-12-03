import React from 'react'

const PostListComponents = () => {
  const [page , setPage] = useState(0);
  const [category, setCategory] = useState('');
  useEffect(()=>{

  },[category, page])
  return (
    <div>PostListComponents</div>
  )
}

export default PostListComponents
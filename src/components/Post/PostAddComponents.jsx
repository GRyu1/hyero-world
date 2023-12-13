import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const SERVER_BASE_URL = "http://localhost:8080";

const PostAddComponents = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState(state&&state.title);
  const [content, setContent] = React.useState(state || "**Hello world!!!**");
  const [category, setCategory ] = useState(state&&state.category);
  const [thumbnailURL , setThumbnailURL] = useState(state&&state.thumbnailURL&&state.thumbnailURL);
  
  const [fileUrl, setFileUrl] = React.useState("File URL Not Ready");
  const [file, setFile] = useState(null);

  const getFileUrl = () => {
    const formData = new FormData();
    formData.append('image',file);
    const config = {
      headers: {
        "Authorization": sessionStorage.getItem('token')
      }
    }
    axios.post(SERVER_BASE_URL+"/api/s3", formData, config)
    .then((resp)=> {
      console.log(resp)
      setFileUrl(resp.data);
      setFile(null);
    })
    .catch((error)=>{
      console.log(error)
    });
  };

  const postPost = () => {
    const data = {
      title,
      category,
      content,
      thumbnailURL
    }
    const config = {
      headers: {
        "Authorization": sessionStorage.getItem('token')
      }
    }
    axios.post(SERVER_BASE_URL+"/api/post",data,config)
    .then((resp)=>{
      navigate('/posts')
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div
      className="container"
      style={{ marginTop: "120px", minHeight: "960px" }}
    >
      <MDEditor value={content} onChange={setContent} height={800} />
      <div>{fileUrl}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}></input>
        <Button onClick={getFileUrl}>Get IMG URL</Button>
      </div>
      <div style={{display:"flex"}}>
        <p>Thumnail URL</p>
        <input type="text" onChange={(e)=>{setThumbnailURL(e.target.value)}}></input>
      </div>
      <div style={{display:"flex", justifyContent:"end"}}>
        <Button onClick={postPost}>제출</Button>
      </div>
    </div>
  );
};

export default PostAddComponents;
import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import axios from "axios";

const SERVER_BASE_URL = "http://localhost:8080"

const PostDetailComponents = ({ value }) => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const { isLogin, isOwner } = useSelector((state) => state.authReducer);
  const [post, setPost] = useState();
  const [comments, setComments] = useState();

  const enrollreply = () => {
    axios.post(SERVER_BASE_URL+'/api/comments',{"commentsPost":state.id,"commentsContent":comments},{headers: {"Authorization":sessionStorage.getItem('accessToken')}})
    .then((resp)=>{
      console.log(resp);
      navigate(`posts/${state.id}`);
    })
    .catch((error)=>{console.log(error)})
  }

  const handleDelete = () => {
    axios.delete(SERVER_BASE_URL+`/api/post/${state.id}`)
    .then((resp)=>{console.log(resp)})
    .catch((error)=>{console.log(error)})
  }

  return (
    <div style={{ margin: "auto", width: "1080px", minHeight: "100vh" }}>
      <h1 style={{ marginTop: "120px" }}>{state && state.title}</h1>
      <h3>{state && state.category}</h3>
      <MDEditor.Markdown
        source={state && state.content}
        style={{ whiteSpace: "pre-wrap", backgroundColor: "transparent" }}
      />
      {state?.comments.map((v, i) => {
        <h5 key={i}>{v.commentsContent}</h5>;
      })}
      {isOwner ? (
        <>
          <Link to="/posts/add" state={state}>
            <Button>수정</Button>
          </Link>
          <Button onClick={handleDelete()}>삭제</Button>
        </>
      ) : (
        ""
      )}
      <div style={{display:"flex", marginTop:"40px"}}>
        <textarea style={{ width: "80%", backgroundColor: "black", height: "60px", color: "white" , resize:"none" }} disabled={!isLogin} placeholder={isLogin ? "" : "로그인을 먼저 진행해주세요"}
        onChange={(e)=>{setComments(e.target.value)}}
        ></textarea>
        <Button onClick={enrollreply}>댓글등록</Button>
      </div>
    </div>
  );
};

export default PostDetailComponents;

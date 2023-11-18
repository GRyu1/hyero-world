import axios from "axios";
import PostThumnail from "components/Post/PostThumnail";
import { PostsContext } from "contexts/PostsContext";
import { error } from "jquery";
import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import bigChartData from "variables/charts.js";

const PostsPerPage = 12;

const Posts = () => {
  const navigate = useNavigate();
  const {
    states : {postList,totalNum,currentPage,category},
    actions : {setPostList,setTotalNum,setCurrentPage,getPost,getPosts,getTotalNum,setCategory}
} = useContext(PostsContext);
  

  useEffect(() => {
    document.body.classList.toggle("landing-page");

    getTotalNum()
    .then((resp)=>{
      setTotalNum(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    });

    getPosts(currentPage)
    .then((resp)=>{
      setPostList(resp.data);
    })
    .catch((err)=>{
      console.log(err);
    });    

    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  useEffect(()=>{
    if(category){
      getPosts(currentPage, category)
      .then((resp)=>{setPostList(resp.data)})
      .catch((err)=>{console.log(err)})
    }
  }, [category])

  const renderPagenation = () => {
    const PaginationItems = [];
    const MaxPageNum = Math.floor(totalNum/PostsPerPage);
    for(let i = 1 ; i<= MaxPageNum ; i++) {
      <PaginationItem>
        <PaginationLink activate={currentPage===i} onClick={()=>{setCurrentPage(i)}}>{i}</PaginationLink>
      </PaginationItem>
    }
    return PaginationItems
  }


  return (
    <div className="wrapper" style={{ marginBottom: "0px" }}>
      <div className="page-header">
        <img alt="..." className="path" src={require("assets/img/blob.png")} />
        <img
          alt="..."
          className="path2"
          src={require("assets/img/path2.png")}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("assets/img/triunghiuri.png")}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("assets/img/waves.png")}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("assets/img/patrat.png")}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("assets/img/cercuri.png")}
        />
        <div
          className="content-center"
          style={{ height: "100%", paddingTop: "5%", marginBottom: "0px" }}
        >
          <Row style={{ width: "100%", height: "90%" }}>
            <Card className="card-preview">
              <CardHeader>
                <h1
                  style={{
                    borderBottom: "1px solid rgba(225, 78, 202, 1)",
                    padding: "10px",
                    paddingBottom:"20px",
                    marginBottom:"0px",
                  }}
                >
                  Posts-Feed
                </h1>
              </CardHeader>
              <Nav className="justify-content-center ">
                <NavItem active>
                  <NavLink onClick={()=>{setCategory("Category1")}}>Category1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{setCategory("Category2")}}>Category2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{setCategory("Category3")}}>Category3</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{setCategory("Category4")}}>Category4</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>{setCategory("Category5")}}>Category5</NavLink>
                </NavItem>
              </Nav>
              <CardBody className="feed-box" style={{width:"100%", height:"100%", overflow:"auto"}}>
                <div className="grid-container">
                  {postList.map((post)=>{
                    <PostThumnail src={post.thumnail} key={post.id}></PostThumnail>
                  })}
                </div>
              </CardBody>

              <CardFooter>
                <Pagination className="">
                  <PaginationItem>
                    <PaginationLink onClick={()=>{
                      if(currentPage!==1) setCurrentPage(prev=>prev-1)
                    }}>Previous</PaginationLink>
                  </PaginationItem>
                  {renderPagenation()}
                  <PaginationItem>
                    <PaginationLink onClick={()=>{
                      if(currentPage!==Math.floor(totalNum/PostsPerPage)) setCurrentPage(prev=>prev+1)
                    }}>Next</PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardFooter>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Posts;

import axios from "axios";
import MyPaginationComponents from "components/Post/MyPaginationComponents";
import PostCategoryComponents from "components/Post/PostCategoryComponents";
import PostListComponents from "components/Post/PostListComponents";
import PostThumnail from "components/Post/PostThumnail";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { setCategory } from "redux/post/postSlice";
import { setPage } from "redux/post/postSlice";

const PostsPerPage = 12;

const Posts = () => {
  const { totalNum , page , postList } = useSelector((state)=>state.postReducer);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("landing-page");

    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);


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
              <PostCategoryComponents></PostCategoryComponents>
              <CardBody className="feed-box" style={{width:"100%", height:"100%", overflow:"auto"}}>
                <div className="grid-container">
                  <PostListComponents></PostListComponents>
                </div>
              </CardBody>

              <CardFooter>
                <MyPaginationComponents></MyPaginationComponents>
              </CardFooter>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Posts;

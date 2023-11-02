import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
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

const Posts = () => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
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
              <Nav className="justify-content-center ">
                <NavItem active>
                  <NavLink href="#">Category1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Category2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Category3</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" >
                  Category4
                  </NavLink>
                </NavItem>
              </Nav>
              <CardBody className="feed-box" style={{width:"100%", height:"100%", overflow:"auto"}}>
                <div className="grid-container">
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>

                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                  <div className="grid-item item">
                    <img src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"></img>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Pagination className="">
                  <PaginationItem>
                    <PaginationLink href="#">Previous</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active={true}>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">Next</PaginationLink>
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

/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
} from "reactstrap";

export default function Basics() {
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">Projects</h2>
        <Row>
          <Col>
            <Card>
              <CardTitle style={{padding:"10px",margin:"0px"}}>
              <h2 style={{margin:'0px', padding:"0px"}}>Project#1</h2>
                <h3>첫번째 프로젝트 이름</h3>
              </CardTitle>
              <CardBody>
              <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 1"
                    className="img-fluid"
                  />
                  <p style={{marginTop:"20px"}}>첫번쨰 프로젝트 설명</p>
              </CardBody>
              <CardFooter><a href="/"><p>Git Url : </p></a></CardFooter>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle style={{padding:"10px",margin:"0px"}}>
                <h2 style={{margin:'0px', padding:"0px"}}>Project#2</h2>
                <h3>두번째 프로젝트 이름</h3>
              </CardTitle>
              <CardBody>
              <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 1"
                    className="img-fluid"
                  />
                  <p style={{marginTop:"20px"}}>두번쨰 프로젝트 설명</p>
              </CardBody>
              <CardFooter><a href="/"><p>Git Url : </p></a></CardFooter>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardTitle style={{padding:"10px",margin:"0px"}}>
              <h2 style={{margin:'0px', padding:"0px"}}>Project#3</h2>
              <h3>세번째 프로젝트 이름</h3>
              </CardTitle>
              <CardBody>
              <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 1"
                    className="img-fluid"
                  />
                  <p style={{marginTop:"20px"}}>세번쨰 프로젝트 설명</p>
              </CardBody>
              
              <CardFooter>
              <a href="/"><p>Git Url : </p></a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

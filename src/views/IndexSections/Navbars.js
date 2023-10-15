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
import '../../assets/css/index.css'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container id="menu-dropdown">
        <h2 className="title">Last Posts</h2>

        <Col>
            <Card style={{padding:"20px"}}>
            <Row>
              <Col md="3" style={{ margin:"0px", padding:"0px"}}>
                <div className="photo-feed-item">
                  <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 1"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md="3" style={{ margin:"0px", padding:"0px"}}>
                <div className="photo-feed-item">
                  <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 2"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md="3" style={{ margin:"0px", padding:"0px"}}>
                <div className="photo-feed-item">
                  <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 3"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col md="3" style={{ margin:"0px", padding:"0px"}}>
                <div className="photo-feed-item">
                  <img
                    src="https://item.kakaocdn.net/do/9d4a4d8368feb0ea31d42724f36156f5f604e7b0e6900f9ac53a43965300eb9a"
                    alt="Photo 3"
                    className="img-fluid"
                  />
                </div>
              </Col>
              </Row>
            </Card>
        </Col>
      </Container>
    </div>
  );
}

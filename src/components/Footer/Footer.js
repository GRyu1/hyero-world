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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container style={{marginTop:"0px"}}>
        <Row>
          <Col md="3">
            <h1 className="title">Hyero-world</h1>
          </Col>
          <Col md="7">
            <Nav style={{display:"flex"}} >
              <NavItem style={{margin:"10px"}}>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem style={{margin:"10px"}}>
                <NavLink to="/landing-page" tag={Link}>
                  Posts
                </NavLink>
              </NavItem>
              <NavItem style={{margin:"10px"}}>
                <NavLink to="/register-page" tag={Link}>
                  Notion-Profile
                </NavLink>
              </NavItem>
              <NavItem style={{margin:"10px"}}>
                <NavLink to="/register-page" tag={Link}>
                  github
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
{/*       
          <Col md="2">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/creativetim"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/creativetim"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://dribbble.com/creativetim"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col> */}
        </Row>
        <Row style={{display:"flex", justifyContent:"center"}}>
        <p>&copy; 2023 Hyero-World. All rights reserved @ CreativeTim & Flaticon & G-ryu.</p>
        </Row>
      </Container>
    </footer>
  );
}

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
import AuthComponents from "components/Auth/AuthComponents";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// reactstrap components
import {
  Button,
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
  UncontrolledTooltip,
  Modal,
  Card,
  Form,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardFooter,
  Input,
} from "reactstrap";


export default function IndexNavbar() {
  const [modalLogin , setModalLogin] = useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  const navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar
      className={"fixed-top "}
      color-on-scroll="100"
      expand="lg"
      style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>Hyero-World </span>
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Hyero-World
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                className="nav-link-btn"
                onClick={() => {
                  navigate("/");
                }}
                rel="noopener noreferrer"
                target="_blank"
                title="Introduction about me"
              >
                <i className="tim-icons icon-single-02" />
                <p className="d-lg-none d-xl-none">Introduction</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                className="nav-link-btn"
                onClick={() => {
                  navigate("/posts");
                }}
                data-placement="bottom"
                rel="noopener noreferrer"
                target="_blank"
                title="Link to Post-List"
              >
                <i className="icon icon-sm tim-icons icon-components" />
                <p className="d-lg-none d-xl-none">Posts</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://hyeroworld.notion.site/hyeroworld/968fbeaa9cd048268c64e2fae053cf0b"
                rel="noopener noreferrer"
                target="_blank"
                title="Link to Notion"
              >
                <i className="tim-icons icon-notes" />
                <p className="d-lg-none d-xl-none">Notion</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                data-target="#loginModal"
                data-toggle="modal"
                onClick={()=>setModalLogin((prev)=>!prev)}
              >
                <i className="tim-icons icon-lock-circle" /> Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      {/* Login Modal */}
      <Modal
        isOpen={modalLogin}
        toggle={()=>setModalLogin((prev)=>!prev)}
        modalClassName="modal-login"
      >
        <Card className="card-login" style={{marginBottom:"0px", border:"1px solid rgba(225, 78, 202, 0.8)"}}>
          <Form action="" className="form" method="">
            <CardHeader>
              <CardTitle tag="h4">Login</CardTitle>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={()=>setModalLogin((prev)=>!prev)}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </CardHeader>
            <CardBody>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"column"}}>
                <h2>KAKAO로 인증하기</h2>
                <h4 style={{margin:"0px"}}>소셜 로그인은 신원 인증으로만 사용되고,</h4>
                <h4 > DB에 저장되지 않습니다.</h4>
                <AuthComponents></AuthComponents>
              </div>
              
            </CardBody>
            <CardFooter className="text-center">
            </CardFooter>
          </Form>
        </Card>
      </Modal>
    </Navbar>
  );
}

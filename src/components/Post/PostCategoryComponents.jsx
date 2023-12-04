import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { setCategory } from "redux/post/postSlice";

const PostCategoryComponents = () => {
  return (
    <Nav className="justify-content-center" style={{gap:"8px"}}>
      <NavItem active>
        <NavLink
          onClick={() => {
            setCategory("Category1");
          }}
          style={{ cursor: "pointer" }}
        >
          Category1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => {
            setCategory("Category2");
          }}
          style={{ cursor: "pointer" }}
        >
          Category2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => {
            setCategory("Category3");
          }}
          style={{ cursor: "pointer" }}
        >
          Category3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => {
            setCategory("Category4");
          }}
          style={{ cursor: "pointer" }}
        >
          Category4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => {
            setCategory("Category5");
          }}
          style={{ cursor: "pointer" }}
        >
          Category5
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default PostCategoryComponents;

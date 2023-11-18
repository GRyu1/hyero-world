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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import MainLayout from "pages/layouts/mainLayout";
import Index from "pages/Index";
import Posts from "pages/Posts";
import PostContextProvider from "contexts/PostsContext";
import PostDetailComponents from "components/Post/PostDetailComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <PostContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Index />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetailComponents />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </PostContextProvider>
  </BrowserRouter>
);

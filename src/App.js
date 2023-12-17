import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { gapi } from "gapi-script";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id:
          "545583354341-rili50r92aai6icajs6ifv9gb2u63rhh.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:id" element={<PostDetails />} />
          <Route
            exact
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

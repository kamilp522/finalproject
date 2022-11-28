import React from "react";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./reducers/loginReducer.js";

import HeroSection from "./components/Home/HeroSection/HeroSection.js";
import InfoSection from "./components/Home/InfoSection/InfoSection.js";
import Layout from "./components/Layout/Layout.js";
import Indicators from "./components/Indicators/Indicators.js";
import Latest from "./components/Latest/Latest.js";
import Login from "./components/Login/Login.js";
import Signin from "./components/Signin/Signin.js";

import "reset-css";
import "./css/app.css";

import { home_page_content } from "./components/Home/content.js";

const App = () => {
  const logged = useSelector((store) => store.logged);
  const dispatch = useDispatch();

  const about = home_page_content.about;
  const join = home_page_content.join;

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedMidtraderUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      dispatch(loginUser(user));
    }
  }, [dispatch, logged]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <InfoSection content={about} />
              <InfoSection content={join} />
            </>
          }
        />
        <Route path="/indicators" element={<Indicators />} />
        <Route path="/latest" element={<Latest />} />

        <Route
          path="/login"
          element={!logged.username ? <Login /> : <Navigate replace to="/" />}
        />

        <Route
          path="/signin"
          element={!logged.username ? <Signin /> : <Navigate replace to="/" />}
        />
      </Routes>
    </Layout>
  );
};

export default App;

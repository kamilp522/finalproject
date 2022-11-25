import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import HeroHeader from "./components/Home/HeroSection/HeroHeader.js";
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
  const about = home_page_content.about;
  const join = home_page_content.join;

  return (
    <Layout>
      <Routes>
        <Route
          path="/latest"
          element={
            <>
              <HeroHeader />
              <InfoSection content={about} />
              <InfoSection content={join} />
            </>
          }
        />
        <Route path="/indicators" element={<Indicators />} />
        <Route path="/" element={<Latest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Layout>
  );
};

export default App;

import React from "react";
import HeroSection from "./components/HeroSection/HeroSection.js";
import AboutSection from "./components/AboutSection/AboutSection.js";
import Layout from "./components/Layout/Layout.js";
import "reset-css";
import "./css/app.css";

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
    </Layout>
  );
};

export default App;

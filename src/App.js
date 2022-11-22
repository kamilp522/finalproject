import React from "react";
import HeroSection from "./components/HeroSection/HeroSection.js";
import Layout from "./components/Layout/Layout.js";
import "reset-css";
import "./css/app.css";

const App = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export default App;

import React from "react";
import HeroHeader from "./components/HeroSection/HeroHeader.js";
import InfoSection from "./components/InfoSection/InfoSection.js";
import Layout from "./components/Layout/Layout.js";
import IndicatorPanel from "./components/IndicatorSection/IndicatorPanel.js";
import "reset-css";
import "./css/app.css";

import { home_page_content } from "./components/content.js";

const App = () => {
  const about = home_page_content.about;
  const join = home_page_content.join;

  return (
    <Layout>
      <IndicatorPanel />
      {/* <HeroHeader />
      <InfoSection content={about} />
      <InfoSection content={join} /> */}
    </Layout>
  );
};

export default App;

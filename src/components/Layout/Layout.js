import React from "react";
import { Main } from "./LayoutElements";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

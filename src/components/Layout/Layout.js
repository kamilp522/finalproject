import React from "react";
import { Main } from "./LayoutElements";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;

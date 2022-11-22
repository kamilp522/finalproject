import React from "react";
import { Main } from "./LayoutElements";

const Layout = (props) => {
  return (
    <>
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;

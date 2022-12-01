import React from "react";
import { Main } from "./LayoutElements";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const notification = useSelector((store) => store.notification);

  return (
    <>
      <Navbar />
      {notification.message && (
        <Notification error={notification.error}>
          {notification.message}
        </Notification>
      )}
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

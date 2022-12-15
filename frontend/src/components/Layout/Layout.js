import React from "react";
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
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;

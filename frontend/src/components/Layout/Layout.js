import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import PropTypes from "prop-types";

import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
    const notification = useSelector((store) => store.notification);

    return (
        <>
            <Navbar />
            {notification.message && (
                <Notification error={notification.error}>
                    {notification.message}
                </Notification>
            )}
            <main>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;

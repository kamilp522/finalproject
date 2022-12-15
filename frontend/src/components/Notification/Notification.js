import React from "react";

import PropTypes from "prop-types";

import {
    NotificationWrapper,
    NotificationContent,
} from "./NotificationElements";

const Notification = ({error, children}) => {
    return (
        <NotificationWrapper id="notification-wrapper" error={error}>
            <NotificationContent id="notification">
                {children}
            </NotificationContent>
        </NotificationWrapper>
    );
};

Notification.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.any
};

export default Notification;

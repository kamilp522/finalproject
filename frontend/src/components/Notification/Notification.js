import React from "react";

import {
    NotificationWrapper,
    NotificationContent,
} from "./NotificationElements";

const Notification = (props) => {
    return (
        <NotificationWrapper id="notification-wrapper" error={props.error}>
            <NotificationContent id="notification">
                {props.children}
            </NotificationContent>
        </NotificationWrapper>
    );
};

export default Notification;

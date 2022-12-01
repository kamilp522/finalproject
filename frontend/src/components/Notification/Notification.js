import React from "react";

import {
  NotificationWrapper,
  NotificationContent,
} from "./NotificationElements";

const Notification = (props) => {
  return (
    <NotificationWrapper error={props.error}>
      <NotificationContent>{props.children}</NotificationContent>
    </NotificationWrapper>
  );
};

export default Notification;

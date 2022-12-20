import React from "react";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as colors from "../components/variables/colors";

import Notification from "../components/Notification/Notification";

const mockStore = configureStore([thunk]);

describe("\nNotification", () => {
  test("notification renders in red color when message is provided and error is true", () => {
    const store = mockStore({
      logged: { token: null, username: null },
      notification: { message: "this is message", error: true },
    });

    const notificationState = store.getState().notification;

    const { container } = render(
      <Router>
        <Provider store={store}>
          <Notification error={notificationState.error}>
            {notificationState.message}
          </Notification>
        </Provider>
      </Router>
    );

    const notificationElement =
      container.querySelector("#notification").textContent;
    expect(notificationElement).toBe("this is message");

    const notificationWrapper = container.querySelector(
      "#notification-wrapper"
    );
    expect(notificationWrapper).toHaveStyle(
      `backgroundColor: ${colors.clr_red_800}`
    );
  });

  test("notification renders in green color when message is provided and error is false", () => {
    const store = mockStore({
      logged: { token: null, username: null },
      notification: { message: "this is message", error: false },
    });

    const notification_state = store.getState().notification;

    const { container } = render(
      <Router>
        <Provider store={store}>
          <Notification error={notification_state.error}>
            {notification_state.message}
          </Notification>
        </Provider>
      </Router>
    );

    const notificationElement =
      container.querySelector("#notification").textContent;
    expect(notificationElement).toBe("this is message");

    const notificationWrapper = container.querySelector(
      "#notification-wrapper"
    );
    expect(notificationWrapper).toHaveStyle(
      `backgroundColor: ${colors.clr_green_800}`
    );
  });
});

import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import Navbar from "../components/Navbar/Navbar";

const mockStore = configureStore([thunk]);

const notLoggedStore = mockStore({
  logged: { token: null, username: null },
  notification: { message: "", error: true },
});

const loggedStore = mockStore({
  logged: { token: "sdfsdfasfsfsa", username: "John" },
  notification: { message: "", error: true },
});

describe("\nNavbar", () => {
  test("can open the nav menu", async () => {
    const { container } = render(
      <Router>
        <Provider store={notLoggedStore}>
          <Navbar />
        </Provider>
      </Router>
    );

    const menuIcon = screen.getByLabelText("menu");
    const navMenu = container.querySelector("#nav-container");

    expect(navMenu).toHaveStyle("height: 45px");

    const user = userEvent.setup();
    await user.click(menuIcon);

    expect(navMenu).toHaveStyle("height: 0px");
  });
  describe("Navigation links", () => {
    describe("When not logged in", () => {
      beforeEach(async () => {
        render(
          <Router>
            <Provider store={notLoggedStore}>
              <Navbar />
            </Provider>
          </Router>
        );
      });

      test("navigate to indicators section when link button is clicked", async () => {
        const indicatorsLink = screen.getByLabelText("indicators");
        const user = userEvent.setup();
        await user.click(indicatorsLink);

        expect(global.window.location.pathname).toContain("/indicators");
      });

      test("navigate to home section when link button is clicked", async () => {
        const homeLink = screen.getByLabelText("home");
        const user = userEvent.setup();
        await user.click(homeLink);

        expect(global.window.location.pathname).toContain("/");
      });

      test("navigate to login section when link button is clicked", async () => {
        const loginLink = screen.getByLabelText("login");
        const user = userEvent.setup();
        await user.click(loginLink);

        expect(global.window.location.pathname).toContain("/login");
      });

      test("can't find quote link when not logged in", () => {
        const quoteLink = screen.queryByLabelText("quote");
        expect(quoteLink).toBeNull();
      });

      test("can't find pairs trades link when not logged in", () => {
        const parisTradesLink = screen.queryByLabelText("pairs trades");
        expect(parisTradesLink).toBeNull();
      });

      test("can't find ideas for trades link when not logged in", () => {
        const ideasForTradesLink = screen.queryByLabelText("ideas for trades");
        expect(ideasForTradesLink).toBeNull();
      });

      test("can't find logout link when not logged in", () => {
        const logoutLink = screen.queryByLabelText("logout");
        expect(logoutLink).toBeNull();
      });
    });
    describe("When logged in", () => {
      beforeEach(async () => {
        render(
          <Router>
            <Provider store={loggedStore}>
              <Navbar />
            </Provider>
          </Router>
        );
      });

      test("information about current user is rendered", () => {
        const currentUserElement = screen.getByText("John logged in");
        expect(currentUserElement).toBeDefined();
      });

      test("navigate to quote section when link button is clicked", async () => {
        const quoteLink = screen.getByLabelText("quote");
        const user = userEvent.setup();
        await user.click(quoteLink);

        expect(global.window.location.pathname).toContain("/quote");
      });

      test("pairs trades menu opens when link button is clicked", async () => {
        const pairsTradesLink = screen.getByLabelText("pairs trades");
        const user = userEvent.setup();
        await user.click(pairsTradesLink);

        const aboutPairsTradesLink =
          screen.queryByLabelText("about pairs trades");
        expect(aboutPairsTradesLink).toBeDefined();

        const ratioChartLink = screen.queryByLabelText("ratio chart");
        expect(ratioChartLink).toBeDefined();

        const pairsTradesCalculatorLink =
          screen.queryByLabelText("about pairs trades");
        expect(pairsTradesCalculatorLink).toBeDefined();
      });

      test("ideas for trades menu opens when link button is clicked", async () => {
        const ideasForTradesLink = screen.getByLabelText("pairs trades");
        const user = userEvent.setup();
        await user.click(ideasForTradesLink);

        const writeDownYourIdeasLink = screen.queryByLabelText(
          "write down your ideas"
        );
        expect(writeDownYourIdeasLink).toBeDefined();

        const yourIdeasLink = screen.queryByLabelText("your ideas");
        expect(yourIdeasLink).toBeDefined();
      });

      test("navigate to home page when log out button is clicked", async () => {
        const quoteLink = screen.getByLabelText("quote");
        const user = userEvent.setup();
        await user.click(quoteLink);

        expect(global.window.location.pathname).toContain("/quote");

        const logout_link = screen.getByLabelText("logout");
        await user.click(logout_link);

        expect(global.window.location.pathname).toContain("/");
      });

      describe("When pairs trades menu is open", () => {
        beforeEach(async () => {
          const pairsTradesLink = screen.getByLabelText("pairs trades");
          const user = userEvent.setup();
          await user.click(pairsTradesLink);
        });

        test("navigate to about pairs trades section when link button is clicked", async () => {
          const aboutPairsTradesLink =
            screen.getByLabelText("about pairs trades");
          const user = userEvent.setup();
          await user.click(aboutPairsTradesLink);

          expect(global.window.location.pathname).toContain(
            "/about-pairs-trades"
          );
        });

        test("navigate to ratio chart section when link button is clicked", async () => {
          const ratioChartLink = screen.getByLabelText("ratio chart");
          const user = userEvent.setup();
          await user.click(ratioChartLink);

          expect(global.window.location.pathname).toContain("/ratio-chart");
        });

        test("navigate to calculator section when link button is clicked", async () => {
          const calculatorLink = screen.getByLabelText(
            "pairs trade calculator"
          );
          const user = userEvent.setup();
          await user.click(calculatorLink);

          expect(global.window.location.pathname).toContain("/calculator");
        });
      });

      describe("When ideas for trades menu is open", () => {
        beforeEach(async () => {
          const pairsTradesLink = screen.getByLabelText("ideas for trades");
          const user = userEvent.setup();
          await user.click(pairsTradesLink);
        });

        test("navigate to write down you ideas section when link button is clicked", async () => {
          const writeDownYourIdeasLink = screen.getByLabelText(
            "write down your ideas"
          );
          const user = userEvent.setup();
          await user.click(writeDownYourIdeasLink);

          expect(global.window.location.pathname).toContain(
            "/write-down-your-ideas"
          );
        });

        test("navigate to your ideas section when link button is clicked", async () => {
          const yourIdeasLink = screen.getByLabelText("your ideas");
          const user = userEvent.setup();
          await user.click(yourIdeasLink);

          expect(global.window.location.pathname).toContain("/your-ideas");
        });
      });
    });
  });
});

import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import Footer from "../components/Footer/Footer";

const mockStore = configureStore([thunk]);

window.scrollTo = jest.fn();

const notLoggedStore = mockStore({
  logged: { token: null, username: null },
  notification: { message: "", error: true },
});

const loggedStore = mockStore({
  logged: { token: "sdfsdfasfsfsa", username: "John" },
  notification: { message: "", error: true },
});

describe("\nFooter", () => {
  beforeEach(async () => {
    render(
      <Router>
        <Provider store={notLoggedStore}>
          <Footer />
        </Provider>
      </Router>
    );
  });

  test("design credit renders", async () => {
    const designCredit = screen.getByText("Design inspired by:");
    expect(designCredit).toBeDefined();
  });

  describe("Footer links", () => {
    describe("When not logged in", () => {
      test("navigate to home section when link button is clicked", async () => {
        const footerHomeLink = screen.getByLabelText("footer home");
        const user = userEvent.setup();
        await user.click(footerHomeLink);

        expect(global.window.location.pathname).toContain("/");
      });

      test("navigate to indicators section when link button is clicked", async () => {
        const footerIndicatorsLink = screen.getByLabelText("footer indicators");
        const user = userEvent.setup();
        await user.click(footerIndicatorsLink);

        expect(global.window.location.pathname).toContain("/indicators");
      });

      test("can't find quote link when not logged in", () => {
        const footerQuoteLink = screen.queryByLabelText("footer quotes");
        expect(footerQuoteLink).toBeNull();
      });

      test("can't find pairs trades link when not logged in", () => {
        const footerPairsTradesLink = screen.queryByLabelText(
          "footer pairs trades"
        );
        expect(footerPairsTradesLink).toBeNull();
      });

      test("can't find ideas for trades link when not logged in", () => {
        const footerIdeasForTradesLink = screen.queryByLabelText(
          "ideas for trades trades"
        );
        expect(footerIdeasForTradesLink).toBeNull();
      });
    });

    describe("When logged in", () => {
      beforeEach(async () => {
        render(
          <Router>
            <Provider store={loggedStore}>
              <Footer />
            </Provider>
          </Router>
        );
      });

      test("navigate to quote section when link button is clicked", async () => {
        const footerQuoteLink = screen.getByLabelText("footer quotes");
        const user = userEvent.setup();
        await user.click(footerQuoteLink);

        expect(global.window.location.pathname).toContain("/quote");
      });

      test("navigate to about pairs trades when link button is clicked", async () => {
        const footerPairsTradesLink = screen.getByLabelText(
          "footer pairs trades"
        );
        const user = userEvent.setup();
        await user.click(footerPairsTradesLink);

        expect(global.window.location.pathname).toContain(
          "/about-pairs-trades"
        );
      });

      test("navigate to write down your ideas when link button is clicked", async () => {
        const footerIdeasForTradesLink = screen.getByLabelText(
          "footer ideas for trades"
        );
        const user = userEvent.setup();
        await user.click(footerIdeasForTradesLink);

        expect(global.window.location.pathname).toContain(
          "/write-down-your-ideas"
        );
      });
    });
  });
});

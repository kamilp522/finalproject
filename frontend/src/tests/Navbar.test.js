import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import Navbar from "../components/Navbar/Navbar";

const mockStore = configureStore([thunk]);

const not_logged_store = mockStore({
	logged: { token: null, username: null },
	notification: { message: "", error: true },
});

const logged_store = mockStore({
	logged: { token: "sdfsdfasfsfsa", username: "John" },
	notification: { message: "", error: true },
});

describe("\nNavbar", () => {
	test("can open the nav menu", async () => {
		const { container } = render(
			<Router>
				<Provider store={not_logged_store}>
					<Navbar />
				</Provider>
			</Router>
		);

		const menu_icon = screen.getByLabelText("menu");
		const nav_menu = container.querySelector("#nav-container");

		expect(nav_menu).toHaveStyle("height: 45px");

		const user = userEvent.setup();
		await user.click(menu_icon);

		expect(nav_menu).toHaveStyle("height: 0px");
	});
	describe("Navigation links", () => {
		describe("When not logged in", () => {
			beforeEach(async () => {
				render(
					<Router>
						<Provider store={not_logged_store}>
							<Navbar />
						</Provider>
					</Router>
				);
			});

			test("navigate to indicators section when link button is clicked", async () => {
				const indicators_link = screen.getByLabelText("indicators");
				const user = userEvent.setup();
				await user.click(indicators_link);

				expect(global.window.location.pathname).toContain("/indicators");
			});

			test("navigate to home section when link button is clicked", async () => {
				const home_link = screen.getByLabelText("home");
				const user = userEvent.setup();
				await user.click(home_link);

				expect(global.window.location.pathname).toContain("/");
			});

			test("navigate to login section when link button is clicked", async () => {
				const login_link = screen.getByLabelText("login");
				const user = userEvent.setup();
				await user.click(login_link);

				expect(global.window.location.pathname).toContain("/login");
			});

			test("can't find quote link when not logged in", () => {
				const quote_link = screen.queryByLabelText("quote");
				expect(quote_link).toBeNull();
			});

			test("can't find logout link when not logged in", () => {
				const logout_link = screen.queryByLabelText("logout");
				expect(logout_link).toBeNull();
			});
		});
		describe("When logged in", () => {
			beforeEach(async () => {
				render(
					<Router>
						<Provider store={logged_store}>
							<Navbar />
						</Provider>
					</Router>
				);
			});

			test("navigate to quote section when link button is clicked", async () => {
				const quote_link = screen.getByLabelText("quote");
				const user = userEvent.setup();
				await user.click(quote_link);

				expect(global.window.location.pathname).toContain("/quote");
			});
			test("navigate to home page when link button is clicked", async () => {
				const quote_link = screen.getByLabelText("quote");
				const user = userEvent.setup();
				await user.click(quote_link);

				expect(global.window.location.pathname).toContain("/quote");

				const logout_link = screen.getByLabelText("logout");
				await user.click(logout_link);

				expect(global.window.location.pathname).toContain("/");
			});
		});
	});
});

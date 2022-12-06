import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import HeroSection from "../components/Home/HeroSection/HeroSection";
import InfoSection from "../components/Home/InfoSection/InfoSection";
import { home_page_content } from "../components/Home/content";

const mockStore = configureStore([thunk]);
const store = mockStore({
	logged: { token: null, username: null },
	notification: { message: "", error: true },
});

window.scrollTo = jest.fn();

describe("\nHome", () => {
	describe("\nHero Section", () => {
		test("hero content changes when indicator is clicked", async () => {
			const { container } = render(
				<Router>
					<Provider store={store}>
						<HeroSection />
					</Provider>
				</Router>
			);

			const head1 = screen.getByText("Learn");
			expect(head1).toBeDefined();

			const user = userEvent.setup();
			const indicator_2 = container.querySelector("#indicator-2");
			const indicator_3 = container.querySelector("#indicator-3");

			await user.click(indicator_2);

			const head2 = screen.getByText("Thrive");
			expect(head2).toBeDefined();

			await user.click(indicator_3);

			const head3 = screen.getByText("Make");
			expect(head3).toBeDefined();
		});
	});

	describe("\nInfo Sections", () => {
		test("navigate to indicators section when link button is clicked", async () => {
			const { container } = render(
				<Router history={history}>
					<Provider store={store}>
						<InfoSection content={home_page_content.about} />
					</Provider>
				</Router>
			);

			const button = container.querySelector(".info-section-button-1");
			const user = userEvent.setup();
			await user.click(button);

			expect(global.window.location.pathname).toContain("/indicators");
		});

		test("navigate to register section when link button is clicked", async () => {
			const { container } = render(
				<Router history={history}>
					<Provider store={store}>
						<InfoSection content={home_page_content.join} />
					</Provider>
				</Router>
			);

			const button = container.querySelector(".info-section-button-2");
			const user = userEvent.setup();
			await user.click(button);

			expect(global.window.location.pathname).toContain("/register");
		});
	});
});

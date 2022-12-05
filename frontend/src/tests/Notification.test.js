import React from "react";

import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Home/HeroSection/HeroSection";

test("can open the nav menu", async () => {
	const { container } = render(
		<Router>
			<Provider store={store}>
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

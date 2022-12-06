import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import Indicators from "../components/Indicators/Indicators";

const mockStore = configureStore([thunk]);

const store = mockStore({
	logged: { token: null, username: null },
	notification: { message: "", error: true },
});

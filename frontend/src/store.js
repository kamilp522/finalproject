import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";

const store = configureStore({
  reducer: {
    loggedIn: loginReducer,
  },
});

export default store;

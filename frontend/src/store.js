import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";

const store = configureStore({
  reducer: {
    logged: loginReducer,
  },
});

export default store;

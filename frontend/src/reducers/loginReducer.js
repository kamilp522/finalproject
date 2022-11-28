import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "", username: "" };

const loginSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, username: null };

const loginSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loginUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logoutUser(state, action) {
      state.token = null;
      state.username = null;
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;

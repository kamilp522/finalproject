import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, username: null };

const loginSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loginUser(state, action) {
      console.log(action.payload);

      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { loginUser } = loginSlice.actions;

export default loginSlice.reducer;

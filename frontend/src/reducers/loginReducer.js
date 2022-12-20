import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, username: null, userId: null };

const loginSlice = createSlice({
    name: "logged",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        },
        logoutUser(state, action) {
            state.token = null;
            state.username = null;
            state.userId = null;
        },
    },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer;

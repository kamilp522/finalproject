import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: "", error: true };

let timeoutId;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload.message;
      state.error = action.payload.error;
    },
  },
});

export const setNotification = (notification) => {
  return async (dispatch) => {
    dispatch(setMessage(notification));
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(setMessage({ message: "", error: true }));
    }, 5500);
  };
};

const { setMessage } = notificationSlice.actions;

export default notificationSlice.reducer;

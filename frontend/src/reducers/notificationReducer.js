import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: "", error: true };

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
    setTimeout(() => {
      dispatch(setMessage({ message: "", error: true }));
    }, 4000);
  };
};

const { setMessage } = notificationSlice.actions;

export default notificationSlice.reducer;

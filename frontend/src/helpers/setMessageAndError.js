import { setNotification } from "../reducers/notificationReducer";

export const setMessageAndError = (dispatchHook, message, error = false) => {
    dispatchHook(setNotification({ message, error }));
};

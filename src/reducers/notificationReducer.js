import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "Initial notification",
  reducers: {
    set(state, action) {
      // Create the new state
      const newNotification = action.payload;
      return newNotification;
    },
    unset(state, action) {
      return "";
    },
  },
});

/* REDUX THUNK FUNCTIONS */

export const setNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch(set(message));

    const timeoutInMs = timeout * 1000;

    setTimeout(() => {
      dispatch(unset());
    }, timeoutInMs);
  };
};

export default notificationSlice.reducer;
export const { set, unset } = notificationSlice.actions;

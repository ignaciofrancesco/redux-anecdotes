import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "Initial notification",
  reducers: {
    setNotification(state, action) {
      // Create the new state
      const newNotification = action.payload;
      return newNotification;
    },
    unsetNotification(state, action) {
      return "";
    },
  },
});

export default notificationSlice.reducer;
export const { setNotification, unsetNotification } = notificationSlice.actions;

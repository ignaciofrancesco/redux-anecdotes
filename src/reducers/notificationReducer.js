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
  },
});

export default notificationSlice.reducer;

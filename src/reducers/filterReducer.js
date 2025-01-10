import { createSlice } from "@reduxjs/toolkit";

// Creates and configure the state and the reducers for filter
const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      const newState = action.payload;
      return newState;
    },
  },
});

export default filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

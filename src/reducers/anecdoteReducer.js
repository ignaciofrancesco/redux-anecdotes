import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    vote(state, action) {
      // Get the id of the anecdote to vote
      const anecdoteId = action.payload;

      // Create the new state with updated anecdote
      const newState = state.map((a) =>
        a.id !== anecdoteId ? a : { ...a, votes: a.votes + 1 }
      );

      return newState;
    },
    add(state, action) {
      // Retrieve the content of the anecdote
      const newAnecdote = action.payload;

      // Update the state
      const newState = [...state, newAnecdote];

      return newState;
    },
    set(state, action) {
      const anecdotes = action.payload;
      return anecdotes;
    },
  },
});

export default anecdoteSlice.reducer;
export const { vote, add, set } = anecdoteSlice.actions;

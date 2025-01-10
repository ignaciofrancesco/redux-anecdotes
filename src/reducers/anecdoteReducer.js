import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

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

// Async action creator, possible via redux thunk
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    // Perform async task
    const anecdotes = await anecdotesService.getAll();
    // Dispatch actions
    dispatch(set(anecdotes));
  };
};

export default anecdoteSlice.reducer;
export const { vote, add, set } = anecdoteSlice.actions;

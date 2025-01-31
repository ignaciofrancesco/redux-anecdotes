import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    update(state, action) {
      // Get the updated anecdote
      const anecdoteUpdated = action.payload;
      // Create the new state with updated anecdote
      const newState = state.map((a) =>
        a.id !== anecdoteUpdated.id ? a : anecdoteUpdated
      );
      return newState;
    },
    add(state, action) {
      // Retrieve the anecdote
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

/* REDUX THUNK ACTION CREATORS */

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    // Perform async task
    const anecdotes = await anecdotesService.getAll();
    // Dispatch actions
    dispatch(set(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    // Create new anecdote in db
    const anecdoteCreated = await anecdotesService.createNew(content);
    // Update the store state
    dispatch(add(anecdoteCreated));
  };
};

export const vote = (anecdote) => {
  return async (dispatch) => {
    // Update the anecdote in the db
    const anecdoteUpdated = await anecdotesService.update({
      ...anecdote,
      votes: anecdote.votes + 1,
    });
    // Update the store state
    dispatch(update(anecdoteUpdated));
  };
};

export default anecdoteSlice.reducer;
export const { update, add, set } = anecdoteSlice.actions;

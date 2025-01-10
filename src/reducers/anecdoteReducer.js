import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
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
      const content = action.payload;
      const newAnecdote = asObject(content);

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

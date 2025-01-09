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

const orderAnecdotesByVotes = (anecdotes) => {
  // Sort in descending order
  return anecdotes.toSorted((a1, a2) => a2.votes - a1.votes);
};

const initialState = anecdotesAtStart.map(asObject);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE": {
      // Get the id of the anecdote to vote
      const anecdoteId = action.payload.id;

      // Create the new state with updated anecdote
      const newState = state.map((a) =>
        a.id !== anecdoteId ? a : { ...a, votes: a.votes + 1 }
      );

      return orderAnecdotesByVotes(newState);
    }

    case "ADD": {
      console.log("state before: ", state);

      // Retrieve the anecdote from the action
      const newAnecdote = action.payload;

      // Update the state
      const newState = [...state, newAnecdote];

      return orderAnecdotesByVotes(newState);
    }

    default:
      return state;
  }
};

export default reducer;

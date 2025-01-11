import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === "") {
      return anecdotes;
    }

    return anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  /* HANDLERS */

  const handleClickVote = (anecdoteId) => {
    // Find the anecdote
    const anecdote = anecdotes.find((a) => a.id === anecdoteId);
    // Update the redux store state, and the db
    dispatch(vote(anecdote));

    const notification = `You voted '${anecdote.content}'`;

    // Set notification message
    dispatch(setNotification(notification, 5));
  };

  const anecdotesSorted = anecdotes.toSorted((a1, a2) => a2.votes - a1.votes);

  return (
    <>
      {anecdotesSorted.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleClickVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;

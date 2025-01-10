import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  unsetNotification,
} from "../reducers/notificationReducer";

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

  // HANDLERS
  const handleClickVote = (anecdoteId) => {
    // Sets the new state of the anecdotes using Redux
    dispatch(vote(anecdoteId));

    const anecdote = anecdotes.find((a) => a.id === anecdoteId);

    const notification = `You voted '${anecdote.content}'`;

    // Set notification message
    dispatch(setNotification(notification));

    // Register a callback to remove the notification
    setTimeout(() => {
      dispatch(unsetNotification());
    }, 5000);
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

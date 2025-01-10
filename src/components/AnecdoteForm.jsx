import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";
import {
  setNotification,
  unsetNotification,
} from "../reducers/notificationReducer";
import anecdotesService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmitAnecdote = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    // Create new anecdote in db
    const anecdoteCreated = await anecdotesService.createNew(content);

    // Update anecdotes state
    dispatch(add(anecdoteCreated));

    /* Set notification message */

    const notification = `You've just created '${content}'`;

    dispatch(setNotification(notification));

    // Register a callback to remove the notification
    setTimeout(() => {
      dispatch(unsetNotification());
    }, 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmitAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;

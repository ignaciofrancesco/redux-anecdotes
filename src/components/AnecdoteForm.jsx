import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";
import {
  setNotification,
  unsetNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmitAnecdote = (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;

    event.target.anecdote.value = "";

    dispatch(add(anecdote));

    const notification = `You've just created '${anecdote}'`;

    // Set notification message
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

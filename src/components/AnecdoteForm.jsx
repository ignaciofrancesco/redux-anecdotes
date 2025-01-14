import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmitAnecdote = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    // Update anecdotes state
    dispatch(createAnecdote(content));

    /* Set notification message */

    const notification = `You've just created '${content}'`;
    dispatch(setNotification(notification, 5));
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

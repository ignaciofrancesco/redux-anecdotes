import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmitAnecdote = (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;

    event.target.anecdote.value = "";

    dispatch(add(anecdote));
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

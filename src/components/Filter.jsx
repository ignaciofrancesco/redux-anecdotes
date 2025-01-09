import { createSetFilterAction } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // Dispatch a setfilter action with new filter
    const filter = event.target.value;
    const setFilterAction = createSetFilterAction(filter);
    // This is a way to set the filter state
    dispatch(setFilterAction);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;

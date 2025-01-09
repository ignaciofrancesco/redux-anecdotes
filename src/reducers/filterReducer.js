// Action creator
export const createSetFilterAction = (filter) => {
  const setFilterAction = {
    type: "SET_FILTER",
    payload: filter,
  };

  return setFilterAction;
};

// The initial filter is the empty string, to show all
const initialFilter = "";

// FILTER REDUCER
// A reducer creates a slice of the global state, including: 1. its initial state 2. a way to compute subsequent states
const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      // Create new filter state
      const newState = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default filterReducer;

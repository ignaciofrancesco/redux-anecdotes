// Defines de GLOBAL STATE STRUCTURE

import { combineReducers, createStore } from "redux";
import anecdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";

// It relates the slice of state "anecdotes", to its reducer "anecdoteReducer" which is the function that computes that state everytime.
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

export default store;

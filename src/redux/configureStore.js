import { people } from "./features/people";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const { createStore } = require("redux");

export const store = createStore(
  combineReducers({ people }),
  applyMiddleware(thunk)
);

import { people } from "./features/people";

const { createStore } = require("redux");

export const store = createStore(people);

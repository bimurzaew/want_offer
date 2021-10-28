const initialState = {
  users: [],
  children: [],
};

export const people = (state = initialState, action) => {
  switch (action.type) {
    case "person/add":
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
            age: action.payload.age,
          },
        ],
        children: [...state.children, ...action.payload.children],
      };
    default:
      return state;
  }
};

export const addPerson = ({ children, age, name }) => {
  return { type: "person/add", payload: { children, age, name } };
};

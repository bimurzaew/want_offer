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
      };
    case "children/add":
      return {
        ...state,
        children: [...state.children, ...action.payload],
      };
    default:
      return state;
  }
};

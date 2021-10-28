const initialState = {
  users: [
    {
      id: 1,
      name: "Vasya",
      lastName: "Vasin",
      age: "20",
      children: [
        {
          name: "Bil",
          age: "12",
        },
        {
          name: "Bil",
          age: "12",
        },
      ],
    },
  ],
};

export const people = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ADD_TODO = "ADD_TODO";
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const initialState = [
  {
    id: 1,
    title: "react을 배워봅시다.",
  },
  {
    id: 2,
    title: "redux를 배워봅시다.",
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      state;
  }
};

export default todos;

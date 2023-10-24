const initialState = {
  todos: [
    { id: 0, description: "apprendre a coder", isDone: true },
    { id: 1, description: "apprendre le coran", isDone: true },
    { id: 2, description: "corriger des copies", isDone: false },
    { id: 3, description: "faire du velo", isDone: false },
  ],
};

let ID = initialState.todos.length - 1;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      ID = ID + 1;
      let task = {
        id: ID,
        description: action.payload,
        isDone: false,
      };

      if (action.payload.trim() === "") {
        return state;
      }

      if (
        state.todos.find((t) => t.description === task.description) ===
        undefined
      ) {
        return { todos: [...state.todos, task] };
      }
      return state;
    case "CHANGE":
      let copyState = { ...state };

      let taskch = state.todos.find((t) => t.id === action.payload.id);

      taskch.description = action.payload.data;
      taskch.isDone = action.payload.isdone;

      copyState.todos.map((t) => {
        if (t.id === taskch.id) {
          t = taskch;
        }
        return taskch;
      });
      return copyState;

    case "DELETE":
      return { todos: state.todos.filter((t) => t.id !== action.payload) };
    case "UPDATE":
      return state;
    default:
      return state;
  }
};

export default reducer;

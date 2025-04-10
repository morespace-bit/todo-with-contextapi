import { useContext, createContext } from "react";
export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "something",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  deleteTo: (id, todo) => {},
  updateTo: (id, todo) => {},
  toogeleTo: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
  return useContext(ToDoContext);
};

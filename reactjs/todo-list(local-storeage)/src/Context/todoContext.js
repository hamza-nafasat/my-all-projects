import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [{ id: "1", text: "i am an example todo", complete: false }],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  completeTodo: () => {},
  capitalize: () => {},
});

const todoProvider = todoContext.Provider;

export default todoProvider;

export const useTodo = () => {
  return useContext(todoContext);
};

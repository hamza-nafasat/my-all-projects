import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import TodoProvider from "./Context/todoContext";

export default function App() {
  let initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  //  FUNCTION FOR CAPTILIZE THE FIRST LATTER OF EVERY TODO TEXT

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id == id ? { ...todo, text: capitalize(newText) } : todo))
    );
  };
  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo))
    );
  };

  //  SET TODOS

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, editTodo, completeTodo, capitalize }}
    >
      <div className="bg-gray-600 min-h-screen w-screen max-w-[100vw] flex justify-center">
        <div className="w-3/4 bg-gray-700 my-5 px-3 py-5 rounded-lg">
          <div>
            <Form />
          </div>
          <div className="mt-5">
            {todos.map((todo) => (
              <div key={todo.id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

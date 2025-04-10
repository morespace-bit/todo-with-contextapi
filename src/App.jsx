import { useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import TodoForm from "./components/TodoForm";
function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((pre) => {
      return [
        {
          id: Date.now(),
          ...todo,
        },
        ...pre,
      ];
    });
  };

  const deleteTo = (id, todo) => {
    setTodos((pre) => pre.filter((dos) => dos.id !== id));
  };

  const updateTo = (id, todo) => {};

  const toogeleTo = (id) => {};

  return (
    <>
      <ToDoProvider value={{ todos, addToDo, deleteTo, updateTo, toogeleTo }}>
        <div className="min-h-screen w-full bg-cyan-950 text-amber-50">
          <TodoForm />
        </div>
      </ToDoProvider>
    </>
  );
}

export default App;

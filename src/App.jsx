import { useEffect, useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";
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

  const deleteTo = (id) => {
    setTodos((pre) => pre.filter((dos) => dos.id !== id));
  };

  const updateTo = (id, todo) => {
    setTodos((pre) => pre.map((predo) => (predo.id === id ? todo : predo)));
  };

  const toogeleTo = (id) => {
    setTodos((pre) => {
      return pre.map((predo) =>
        predo.id === id ? { ...predo, complete: !predo.completed } : predo
      );
    });
  };

  useEffect(() => {
    const storedtodos = JSON.parse(localStorage.getItem("todos"));
    if (storedtodos) {
      setTodos(storedtodos);
    }
  }, []);

  useEffect(() => {
    if (todos[0]) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("name", "Nirmal");
  });

  return (
    <>
      <ToDoProvider value={{ todos, addToDo, deleteTo, updateTo, toogeleTo }}>
        <div className="min-h-screen w-full bg-cyan-950 text-amber-50">
          <TodoForm />

          <div className="w-full">
            {todos.map((dos) => {
              return (
                <div key={dos.id} className="flex justify-center items-center">
                  {console.log(dos)}
                  <Todolist dos={dos} />
                </div>
              );
            })}
          </div>
        </div>
      </ToDoProvider>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { useToDo } from "../context/ToDoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addToDo, todos } = useToDo();
  function handleClick(e) {
    if (todo && todo.length > 0) {
      addToDo({ todo: todo, completed: false });
      todos.forEach((val) => {
        console.log(val);
      });
    }
    setTodo("");
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 pt-10">
        <h1 className="font-black text-3xl">Add your todos</h1>
        <div className="flex gap-3">
          <input
            className="border-cyan-200 border-2 w-2xl outline-none cursor-pointer indent-2 p-2 rounded-2xl bg-blue-100 text-black font-mono text-2xl"
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            onClick={handleClick}
            className="px-5 text-2xl py-1 rounded-2xl bg-blue-400 hover:scale-105 hover:bg-blue-700 transition-all ease-in-out cursor-crosshair active:scale-90"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoForm;

import React, { useState } from "react";
import { useToDo } from "../context/ToDoContext";

function Todolist({ dos }) {
  const [newTodo, setNewTodo] = useState(dos.todo);
  const { deleteTo, updateTo, toogeleTo } = useToDo();
  console.log(dos);
  return (
    <>
      <div className="flex justify-between items-center text-2xl bg-cyan-900 w-3xl mt-4 p-2 rounded-3xl">
        <div className="flex gap-2 ml-2">
          <input type="checkbox" />
          <input
            type="text"
            value={newTodo}
            className="text-3xl font-bold outline-none"
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-2 bg-pink-400 rounded-full hover:scale-105 active:scale-85 transition-all ease-linear cursor-no-drop`}
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteTo(dos.id);
            }}
            className="px-3 py-2 bg-pink-400 rounded-full hover:scale-105 active:scale-85 transition-all ease-linear cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todolist;

import React from "react";

function TodoForm() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 pt-10">
        <h1 className="font-black text-3xl">Add your todos</h1>
        <div className="flex gap-3">
          <input
            className="border-cyan-200 border-2 w-2xl outline-none cursor-pointer indent-2 p-2 rounded-2xl bg-blue-100 text-black font-mono text-2xl"
            type="text"
          />
          <button className="px-5 text-2xl py-1 rounded-2xl bg-blue-400 hover:scale-105 hover:bg-blue-700 transition-all ease-in-out">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoForm;

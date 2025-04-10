import React from "react";

function Todolist({ dos }) {
  console.log(dos);
  return (
    <>
      <div className="flex justify-center items-center text-2xl bg-cyan-700">
        <input type="checkbox" />
      </div>
    </>
  );
}

export default Todolist;

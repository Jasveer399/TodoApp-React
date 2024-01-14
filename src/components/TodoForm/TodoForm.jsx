import React, { useState } from "react";
import { useTodo } from "../../Contexts/Todo";

function TodoForm() {
  const [todo, settodo] = useState("");
  const { addTodo } = useTodo();

  const addtodo = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo: todo, complete: false });
    settodo("");
  };
  return (
    <form onSubmit={addtodo} className="flex">
      <input
        type="text"
        placeholder="Write Todo...."
        className="mt-4 w-full p-2 rounded-l-lg outline-none bg-white/10"
        value={todo}
        onChange={(e)=>settodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black/60 rounded-r-lg shrink-0 mt-4 px-3"
      >
        ADD
      </button>
    </form>
  );
}

export default TodoForm;

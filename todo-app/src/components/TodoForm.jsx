import React, { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addTodoSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo: todo, completed: false }); //Context api under creat add todo method call and pass todo object method create time todo parametor expected object pass
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={addTodoSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo} //input under value variable pass it's called waring
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

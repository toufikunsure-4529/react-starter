import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); //dispatch used reducer through store under valur changes

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(""); // Clear input after adding todo
  };

  return (
    <form className="space-x-3 mt-12" onSubmit={addTodoHandler}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 foucs:border-indigo-500 foucs:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:ouline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;

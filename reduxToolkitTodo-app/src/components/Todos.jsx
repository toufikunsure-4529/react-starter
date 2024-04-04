import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/TodoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos); //select state store data access state and store under value access
  const dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = useState(todos.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className=" mt-4 flex justify-between bg-zinc-800 px-4 py-2 rounded"
        >
          <input
            type="text"
            value={todo.text}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            className={`text-black rounded w-3/6 px-2 py-2 ${
              isTodoEditable
                ? "bg-white shadow-2xl shadow-red-900"
                : "bg-green-500"
            }`}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (isTodoEditable) {
                  dispatch(updateTodo(todo.id, { ...todos, text: todoMsg }));
                } else {
                  setIsTodoEditable((prev) => !prev);
                }
              }}
              className="text-white bg-red-600 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;

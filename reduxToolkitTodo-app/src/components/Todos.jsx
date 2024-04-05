import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/TodoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos); //useSelector under access state value as a call back and selecy state value for todos value
  const dispatch = useDispatch(); //dispatch used because deleteTodo to action for store
  const [isTodoEditable, setIsTodoEditable] = useState();

  const handleTodoTextChange = (e, todo) => {
    const newText = e.target.value;
    dispatch(updateTodo({ id: todo.id, text: newText }));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className=" mt-4 flex justify-between bg-[#172842]  py-3 px-3 rounded-md shadow-2xl "
        >
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleTodoTextChange(e, todo)}
            readOnly={!isTodoEditable}
            className={`text-black rounded w-full sm:w-3/6 px-2 py-2 ${
              isTodoEditable
                ? "bg-white shadow-2xl shadow-red-900"
                : "bg-green-500"
            }`}
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (isTodoEditable) {
                  dispatch(updateTodo({ id: todo.id, text: todo.text }));
                  setIsTodoEditable(false);
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

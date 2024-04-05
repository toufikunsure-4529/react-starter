import React, { useEffect, useRef } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Welcome</i> Let's create todo.",
        "&amp; and continue your work.",
        "Let's add Todo",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8 rounded-lg text-white flex flex-col justify-center items-center ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white  text-3xl ">
          {" "}
          <span ref={el} />
        </div>
        <h1>Learn Redux & Redux-Toolkit</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <div className="mb-4 w-3/4">
          <AddTodo />
        </div>
        <div className="flex  flex-col w-full sm:w-3/6 justify-center shadow-2xl ">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;

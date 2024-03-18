import { useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoContextProvider>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </TodoContextProvider>
  );
}

export default App;

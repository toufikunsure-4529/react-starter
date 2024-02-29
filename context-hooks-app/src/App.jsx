import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { countContext } from "./context/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <countContext.Provider value={{count,setCount}}> {/* we have create createContext and store countContext variable .provider syntaxt to wrap all component and under component all value will be pass thorough count state value for <Navbar is nesting component under another component will be nesting all component will be access count state [also when many value pass as context to used object and value also object thorough access] */}
        <Navbar />

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </countContext.Provider> 
    </>
  );
}

export default App;

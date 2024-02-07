import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const obj={
    name:"dev_74"
  };
  const myArr=['HTML','CSS','Javascript','React']
  return (
    <>
      <h1>Tailwind CSS</h1>
      <Card userName='Javascript' btnText='Click Me' dataObj={obj} technologies={myArr}/>
      <Card userName='Object' btnText='Visit Me' />
      <Card />
    </>
  );
}

export default App;

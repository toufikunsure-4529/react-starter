import { useState } from 'react'; //React hooks import use state hooks basically used UI chnages propogate value
import './App.css';

function App() {

  const [counter,setCounter]=useState(6) //userstate hook work useState(6) default valur set{any data type} array to first variable counter is variable intilized default value after update and setCounte is function to propogate update counter variable && setCounter function analyzed code see counter variable and update UI DOM

  const addValue=()=>{
    if(counter>=20){
      setCounter(counter)
      alert('Hey you can Maximum 20 Value Added')
    }
    else{
      setCounter(counter+1) //set counter function call to counter variable value update +1
    }
  }
  
  const removeValue=()=>{
    if(counter<=0){
      setCounter(counter)
      alert(`Hey you can't Update Negative Value`)
    }
    else{
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Counter React Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App

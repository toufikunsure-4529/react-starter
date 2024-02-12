import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); //default passowrd length 8 set
  const [numberAllowed, setNumberAllowed] = useState(false); //password under number allowed checkbox
  const [charAllowed, setCharAllowed] = useState(false); //char allowed check box
  const [password, setPassword] = useState(""); //input element under password after we generate password & set value

  //useRef hooks
  const passwordRef=useRef(null) //to any element reference get and store variable default not assign null empty

  const passwordGenerator = useCallback(() => {
    //useCallback is a React Hook that lets you cache a function definition between re-renders.

    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789"; //if number checkbox checked true string to add this number
    }

    if (charAllowed) {
      str += "~!@#$%$%^^&*()_+"; //if char checkbox checked true string to add this number
    }

    //loop through set the length and str variable to random value pick
    for (let i = 1; i <= length; i++) {
      let randomPassVal = Math.floor(Math.random() * str.length + 1); // this var store string index value stre
      pass += str.charAt(randomPassVal); //string to character value pass string special method charAt
    }

    setPassword(pass); //use state password variable under we store random genrate password
  }, [length, numberAllowed, charAllowed, setPassword]); //setPassword is methood pass store password value optimized perpose & number lenght char state any change to memorized function to cach memory

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]); //useEffect hooks when methood without click interenct to run brwser reload to used useEffect hooks expect one callback and dependencies callback under methood need run & dependencies any changes to rerun this methood
  
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select() //useRef to input element refence pass and when method run we also this work optioniolly seletct ?.seletc() like
    passwordRef.current?.setSelectionRange(0,length) //set selection range
    window.navigator.clipboard.writeText(password) //window object only react used to write but next.js not used becaouse next js used to server side rendaring react end of the day javascript
  },[password])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-300 ">
        <h1 className="text-center text-2xl mb-3">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-cyan-50"
            placeholder="Password"
            readOnly
            ref={passwordRef} //reference get to input & argument under pass this ref useRef hooks store variable
          />
          <button className="outline-none bg-cyan-300 px-3 py-0.5 shrink-0 text-center" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="rangeElem"
              id="rangeElem"
              min={8}
              max={35}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="rangeElem">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberAllowed"
              id="numberAllowed"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev); //useState pass callback and prev value change reverse value like checkbox chek and true or false
              }}
            />
            <label htmlFor="numberAllowed">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="charAllowed"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev); //useState pass callback and prev value change reverse value like checkbox chek and true or false
              }}
            />
            <label htmlFor="charAllowed">Character</label>
          </div>
          <div className="flex items-center gap-x-1">
          <button className="outline-none bg-cyan-300 px-3 py-2 rounded-lg shrink-0 text-center" onClick={passwordGenerator}>
            Re-Genarate
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;



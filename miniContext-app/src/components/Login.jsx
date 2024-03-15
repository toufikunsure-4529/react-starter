import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      alert("All are Required!");
    } else {
      setUser({ userName, password });
    }
    setUserName('')
    setPassword('')
  };
  return (
    <div className="container">
      <div className="loginContainer">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;

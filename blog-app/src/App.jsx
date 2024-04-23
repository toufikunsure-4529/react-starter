import "./App.css";
import { authServiceObj } from "./appwrite/auth";
import conf from "./conf/conf";

function App() {
  console.log(conf.appwriteBucketId);

  const auth = () => {
    const email = "toufiksk.ab3@gmail.com52299";
    const password = "Toufik@95959595"; // Not recommended to store password as plain text
    const name = "Toufik";
    authServiceObj.createAccount({ email, password, name });
  };

  return (
    <>
      <h1>Blog app with appwrite</h1>
      <button onClick={auth}>Auth</button>
    </>
  );
}

export default App;

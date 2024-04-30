import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { authServiceObj } from "./appwrite/auth";
import { Footer, Header } from "./components";
import { login, logout } from "./features/authSlice";

function App() {
  const [loading, setLoading] = useState(true); //to fetch data network request to conditaional redaring loading loader
  const dispatch = useDispatch();

  useEffect(() => {
    authServiceObj
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); //to check auth service to user login to store under login method userData actions.payload under dispatch under data
        } else {
          dispatch(logout()); //userdata not get to store updated activity for logout
        }
      })
      .finally(() => setLoading(false)); //finally every time run so when data will be fetch to loading loader stop
  }, []);

  const auth = () => {
    const email = "toufiksk.ab3@gmail.com52299";
    const password = "Toufik@95959595"; // Not recommended to store password as plain text
    const name = "Toufik";
    authServiceObj.createAccount({ email, password, name });
  };

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-green-300">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <h1 className="text-center text-red-700 text-2xl">Loading...</h1>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { authServiceObj } from "./appwrite/auth";
import { Footer, Header } from "./components";
import { login, logout } from "./features/authSlice";
import Signup from "./components/Signup";

function App() {
  const [loading, setLoading] = useState(true); //to fetch data network request to conditaional redaring loading loader
  const dispatch = useDispatch();

  //this use effect check when browser reload to check user current status and updated store
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

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-green-300">
      <div className="w-full block">
        <Header />
        {loading ? (
          <h1 className="text-center text-red-700 text-2xl">Loading...</h1>
        ) : (
          <main className="py-6">
            <Outlet />
          </main>
        )}
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

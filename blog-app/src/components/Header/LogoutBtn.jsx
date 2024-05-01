import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authServiceObj } from "../../appwrite/auth";
import { logout } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    //auth service appwrite this method define logout and return promise so write .then
    authServiceObj
      .logout()
      .then(() => {
        dispatch(logout()); //when logut method call to successfully logout dispatch store update user are logout
      })
      .catch((error) => {
        toast.error("Error:While Logout", error);
      });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-[#8050FACC] rounded-full  "
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//to function check childreen render or not using conditional rendaring
function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status); //get to state user are loggedin or not?

  //useEffect to check any changes to dippendices and condition base which page redrect
  useEffect(() => {
    //to check user are authenticate are not? check frist conditon when render component user props default true are check auth not equal authen.. to user nabigate plese login
    // true&&false!==true (true&&true) navigate login
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    //user authentacation pass like true and auth stats [false&&true!==true=(false&&false)]
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    // //not in this example sort form
    // authStatus == true ? navigate("/") : navigate("login");

    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children} </>; //condition check if loading to show loading other wise children
}

export default Protected;

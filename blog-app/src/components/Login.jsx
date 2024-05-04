import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authServiceObj } from "../appwrite/auth";
import { login as storeLogin } from "../features/authSlice"; //login as authLogin means whole project login method name used authLogin
import Logo from "./Logo";
import { Input } from "./index";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm(); //it is the react hook form method prebuild import react hook form
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError(""); //this good tricks when submission start input error cleanup
    try {
      const session = await authServiceObj.login(data); //under auth login method pass data email/password
      if (session) {
        const userData = await authServiceObj.getCurrentUser(); //to get auth under appwrite this method create and get user Data
        if (userData) {
          dispatch(storeLogin(userData)); //if user login session login to updated store login status tru
        }
        navigate("/"); //successfully login to navigate progamatically home root page link used to click page but navigate to auto
      }
    } catch (error) {
      setError(error.message); //if error promt for login to state under set error massage
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-3xl bg-green-200 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-semibold leading-tight">
          Sign in your account
        </h2>
        {error && <p className="text-red-500 text-center mt-8">{error}</p>}
        {/* onSubmit to handleSubmit it is method define react-hook form useForm keyword and pass my own create login handaler form submit [NOTE:When handale submit to useForm define register handleSubmit is event when form submit register thorough input element value get never managed state] */}
        <form onSubmit={handleSubmit(login)} className="mt-8 md:px-10 ">
          <div className="space-y-5">
            {/* input componets used */}
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "true",
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Email address must be valid address",
                },
              })}
            />
            {/* {...register("email(unique)",option validation)} react form useForm method register thorough value input managed and ... spred to pertical this input tager if not spread another register overwrite value */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            {/* <Button type="submit" className="w-full">Sign In</Button>{" "} */}
            <button
              className="bg-blue-400 hover:bg-blue-600 duration-150 text-white w-full px-4 py-2 rounded-md"
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-2 text-left text-base text-black/60">
              {" "}
              Don&apos;t have any account?&nbsp;
              <Link
                to="/signup"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default Login;

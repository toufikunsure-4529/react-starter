import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authServiceObj } from "../appwrite/auth";
import { login } from "../features/authSlice";
import { Input, Logo } from "./index";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const signup = async (data) => {
    setError("");
    try {
      const signupUserData = await authServiceObj.createAccount(data);
      if (signupUserData) {
        const userData = await authServiceObj.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
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
          Create in your account
        </h2>
        {error && <p className="text-red-500 text-center mt-8">{error}</p>}
        <form className="mt-8 md:px-10 " onSubmit={handleSubmit(signup)}>
          <div className="space-y-5">
            <Input
              label="Name"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "true",
                validate: {
                  matchPattern: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "Email address must be valid address",
                },
              })}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter a Password"
              {...register("password", {
                required: true,
              })}
            />
            {/* <Button type="submit" children="Create a account" /> */}
            <button
              className="bg-blue-400 hover:bg-blue-600 duration-150 text-white w-full px-4 py-2 rounded-md"
              type="submit"
            >
              Create Account
            </button>
            <p className="mt-2 text-left text-base text-black/60">
              {" "}
              Alredy have an account?&nbsp;
              <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
              >
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

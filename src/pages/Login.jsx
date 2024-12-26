import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("")
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(data))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
      console.error("Login page", error)
    }
  };

  return (
    <div className=" px-16">
      <div className="w-44 ">
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center gap-14 ">
        <p className="text-3xl text-gray-900">
          Make the most of your professional life
        </p>
        <div>
          <div className="w-[380px] flex flex-col gap-4 bg-white rounded-lg px-3 py-5">
            <form onSubmit={handleSubmit(login)}>
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email or phone number
                </label>
                <input
                  className="border-2 border-gray-500 p-1"
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm text-gray-600" htmlFor="password">
                  Password (8+ character)
                </label>
                <input
                  className="border-2 border-gray-500 p-1"
                  type="password"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: true
                  })}
                />
              </div>
              <p className="text-sm">
                By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
                <span className="text-blue-900">
                  {" "}
                  User Agreement, Privacy Policy,
                </span>{" "}
                and <span className="text-blue-900">Cookie Policy.</span>
              </p>
              <button type="submit" className="w-full bg-blue-600 p-2 rounded-full text-white cursor-pointer">
                Agree & Join
              </button>
            </form>
            <div className="relative flex flex-col items-center py-3">
              <hr className="absolute top-[25px] w-full h-[2px] bg-gray-600 rounded-full" />
              <p className="z-10 bg-white px-3 ">or</p>
            </div>
            <button className="w-full border border-black p-2 rounded-full  cursor-pointer">
              Continue with Google
            </button>
            <button className="w-full border border-black p-2 rounded-full  cursor-pointer font-semibold">
              Continue with Microsoft
            </button>
            <div className="flex flex-col gap-8">
              <p className="text-center text-[15px]">
                Already on LinkedIn?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-900 font-semibold cursor-pointer text-[16px]"
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
          <p className="text-center text-[15px] py-3">
            Looking to create a page for a business?{" "}
            <span className="text-blue-900">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

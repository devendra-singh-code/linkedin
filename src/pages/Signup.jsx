import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const signupForm = useRef();
  const navigate = useNavigate();

  const signupHandle = async () => {
    const name = signupForm.current.name.value;
    const email = signupForm.current.email.value;
    const password1 = signupForm.current.password1.value;
    const password2 = signupForm.current.password2.value;

    const data = { email, password1, password2, name };
    console.log(data);

    if (password1 !== password2) {
      alert("Password dont matched");
      return;
    }

    const createUser = await authService.createAccount(data);
    if (createUser) {
      const userData = await authService.getCurrentUser();
      if(userData){

        navigate("/");
      }
    }
  };

  return (
    <div className=" px-16">
      <div className="w-44 ">
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center gap-10 ">
        <div>
          <div className="w-[380px] flex flex-col gap-3 bg-white rounded-lg px-3 py-5">
            <div>
              <p className="text-[36px] font-medium">Sign in</p>
              <p className="text-sm">
                Stay updated on your professional world.
              </p>
            </div>
            <form
              ref={signupForm}
              onSubmit={signupHandle}
              className="flex flex-col gap-3"
            >
              <div className="w-full flex flex-col gap-1">
                <input
                  className="border-2 border-gray-400 p-2"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  className="border-2 border-gray-400 p-2"
                  type="email"
                  name="email"
                  placeholder="Email or phone"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  className="border-2 border-gray-400 p-2"
                  type="password"
                  name="password1"
                  placeholder="Password"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <input
                  className="border-2 border-gray-400 p-2"
                  type="password"
                  name="password2"
                  placeholder="Confirm password"
                />
              </div>
              <p className="text-base text-blue-700 font-semibold">
                Forget password?
              </p>
              <button
                type="submit"
                className="w-full bg-blue-600 p-3 rounded-full text-white cursor-pointer"
              >
                Sign in
              </button>
            </form>

            <div className="relative flex flex-col items-center py-3">
              <hr className="absolute top-[25px] w-full h-[2px] bg-gray-600 rounded-full" />
              <p className="z-10 bg-white px-3 ">or</p>
            </div>
            <p className="text-sm">
              By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
              <span className="text-blue-900">
                {" "}
                User Agreement, Privacy Policy,
              </span>{" "}
              and <span className="text-blue-900">Cookie Policy.</span>
            </p>
            <button className="w-full border border-black p-2 rounded-full  cursor-pointer">
              Continue with Google
            </button>
            <button className="w-full border border-black p-2 rounded-full  cursor-pointer font-semibold">
              Continue with Microsoft
            </button>
            <button className="w-full border border-black p-2 rounded-full text-gray-700  cursor-pointer font-semibold">
              Continue with Apple
            </button>
          </div>
          <p className="text-center text-[15px] py-3">
            New to LinkedIn? <span className="text-blue-900">Join now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

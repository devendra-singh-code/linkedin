import React, { useEffect, useState } from "react";
import one from "../assets/1.svg";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import { useDispatch, useSelector } from "react-redux";
import Main from "./MAin";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";

const Home = () => {
  
  const userData = useSelector(state => state.auth.status) 


  // const [userData, setuserData] = useState(false)
  // const user = authService.getCurrentUser().then((data) => setuserData(data.status))

  if (!userData) {
    return (
      <div className="md:flex md:flex-row flex flex-col items-center gap-3 py-8 w-full pt-[100px]">
        <div className="md:w-[50%]">
          <p className="md:text-[48px] md:text-start text-center text-3xl mb-10 text-gray-600 leading-tight">
            Welcome to your professional community
          </p>
          <div className="md:w-[370px] w-full flex flex-col gap-2 items-center justify-center">
            <button className="w-full flex items-center justify-center gap-2 border border-black p-2 rounded-full  cursor-pointer bg-blue-600 border-none text-white">
              {" "}
              <img src={google} className="w-8" alt="" />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-black p-2 rounded-full  cursor-pointer">
              {" "}
              <img src={microsoft} className="w-8" alt="" /> Continue with
              Microsoft
            </button>
            <button className="w-full border border-black p-2 rounded-full  cursor-pointer">
              Continue with email
            </button>
            <p className="text-center text-[15px] py-3">
              New to LinkedIn? <span className="text-blue-900">Join now</span>
            </p>
            <p className="text-xs text-center">
              By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
              <span className="text-blue-900">
                {" "}
                User Agreement, Privacy Policy,
              </span>{" "}
              and <span className="text-blue-900">Cookie Policy.</span>
            </p>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={one} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import one from "../assets/1.svg";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import { useDispatch, useSelector } from "react-redux";
import Main from "./MAin";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import one1 from "../assets/12.png";
import two from "../assets/2.png";
import logo from "../assets/logo.svg";

const Home = () => {
  const userData = useSelector((state) => state.auth.status);

  const first = [
    "Enngineering",
    "Business Development",
    "Finance",
    "Administratiive Assitant",
    "Retail Associate",
    "Customer Service",
    "Operations",
    "Information Technology",
    "Marketing",
    "Human Resources",
    " Healthcare Service",
    "Sales",
    "Project and Project Management",
    "Accounting",
    "Arts and Design",
    "Commmunity and Social Servicces",
    "Consulting",
    "Education",
    "Enterpreneurship",
    "Legal",
    "Media and Communictaions",
    "Military and Protective Services",
    "Product Management",
    "Purchasing",
    "Quality Assurance",
    "Real Estate",
    "Reasearch",
    "Support",
    "Administrative",
  ];

  const second = [
    "E-Commerce",
    "CRM Software",
    "Human Resources Management Systems",
    "Recuriting Software",
    "Sales Intelligence Software",
    "Project Management Software",
    "Help Desk Software",
    "Social Netwroking Software",
    "Desktop Publishing Software",
  ];

  const third = ["PinPoint", "Queens", "Crossclimb", "Tango"];

  if (!userData) {
    return (
      <>
        <div className="flex flex-col bg-white items-center  w-full  ">
          <div className="md:flex md:flex-row bg-white flex flex-col items-center gap-3 py-8 w-full pt-[100px]">
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
                  New to LinkedIn?{" "}
                  <span className="text-blue-900">Join now</span>
                </p>
                <p className="text-xs text-center">
                  By clicking Agree & Join or Continue, you agree to the
                  LinkedIn{" "}
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
          <div className="w-full flex pt-12 ">
            <div className="w-[45%] pr-20">
              <h3 className="text-3xl text-gray-800">
                Explore collaborative articles
              </h3>
              <p className="text-lg text-gray-700 pt-2">
                We’re unlocking community knowledge in a new way. Experts add
                insights directly into each article, started with the help of AI
              </p>
            </div>
            <div className="w-[55%] flex  flex-wrap items-center gap-2">
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Marketing
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Public Administration
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Healthcare
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Engineering
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                IT Service
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Sustainability
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Business Administration
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Telecommunications
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                HR Management
              </p>
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Show all
              </p>
            </div>
          </div>
          <div className="w-full flex pt-36 ">
            <div className="w-[45%] pr-20">
              <h3 className="text-3xl w-[300px]  text-gray-700 ">
                Find the right job or internship for you
              </h3>
            </div>
            <div className="w-[55%] flex  flex-wrap items-center gap-2">
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Marketing
              </p>
              {first.map((service) => (
                <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className=" relative w-full flex flex-col items-center  gap-6 p-36 ">
            <p className="text-3xl text-red-400">
              Post your job for millions of people to see
            </p>
            <button className="py-3 px-6 border-2 border-blue-400 font-semibold rounded-full text-blue-500">
              Post a job
            </button>
          </div>
          <div className="w-full flex  ">
            <div className="w-[45%] pr-20">
              <h3 className="text-3xl w-[300px]  text-gray-900 ">
                Discover the best software tools
              </h3>
              <p className="text-lg text-gray-700 pt-2">
                Connect with buyers who have first-hand experience to find the
                best products for you.
              </p>
            </div>
            <div className="w-[55%] flex  flex-wrap items-center gap-2">
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Marketing
              </p>
              {second.map((service) => (
                <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex pt-36 ">
            <div className="w-[45%] pr-20">
              <h3 className="text-3xl w-[300px]  text-gray-900 ">
                Keep your mind sharp with games
              </h3>
              <p className="text-lg text-gray-700 pt-2">
                Take a break and reconnect with your network through quick daily
                games.
              </p>
            </div>
            <div className="w-[55%] flex  flex-wrap items-center gap-2">
              <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                Marketing
              </p>
              {third.map((service) => (
                <p className="border-2 border-gray-500 rounded-full  py-4 px-6 font-semibold text-gray-600 text-[15px]">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center pt-36 ">
            <div className="w-[60%] pr-20">
              <h3 className="text-3xl w-[400px]  text-gray-900 ">
                Let the right people know you’re open to work.
              </h3>
              <p className="text-lg text-gray-700 pt-2">
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </p>
            </div>
            <div className="w-[40%] flex  flex-wrap items-center gap-2">
              <img src={one1} className="" alt="" />
            </div>
          </div>
          <div id="fullscreen" className="w-full justify-center flex">
            <div className=" px-20 pt-36">
              <p className="text-[50px] pb-4 text-gray-900 ">
                Join your colleagues, classmates, and friends on LinkedIn.
              </p>
              <button className="py-3 px-5 font-semibold text-sm bg-blue-800 text-white  rounded-full">
                Get started
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between  ">
            <div>
              <img src={logo} className="w-32 h-10 " alt="" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 pb-1">General</p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Sign Up
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Help Center
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                About
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Press
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Blog
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Careers
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Developers
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 pb-1">
                Browser LinkedIn
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Learning
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Jobs
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Games
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Salary
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Mobile
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Services
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Products
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Top Companies Hub
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 pb-1">
                Business Solutions
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Talent
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Marketing
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Sales
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Learning
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 pb-1">Directories</p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Members
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Jobs
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Companies
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Featured
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Learning
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Posts
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Articles
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Schools
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                News
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                News Letters
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Services
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Products
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                Advice
              </p>
              <p className="text-[14px] text-gray-800 p-0.5 hover:underline cursor-pointer">
                People Search
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-3 pt-20">
            <img src={logo} className="w-16 h-10" alt="" />
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              About
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Accessibilty
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              User Aggrement
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Privacy Polices
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Cookies Policy
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Copyright Policy
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Brand Policy
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Guest Controls
            </p>
            <p className="text-gray-500 text-[12px] hover:underline cursor-pointer">
              Community Guidlines
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;

import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import list from '../assets/list.jpg'
import ads from '../assets/ads.png'
import { FaUserGroup } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaArrowRight  } from "react-icons/fa";

const LoginHome = () => {
  return (
    <div className="w-full pt-[50px]">
      <div className="flex justify-center gap-3">
        <div className="w-full flex flex-col justify-center py-6  gap-5">
          <div className="bg-white rounded-xl overflow-hidden w-full">
            <div className="bg-gray-400 h-40 relative">
              <div className="absolute right-5 top-5 p-2 bg-white rounded-full cursor-pointer">
              <FaCamera className="text-blue-600" />
              </div>
              <div className="absolute top-20 left-10 border-2 border-white bg-green-600 h-32 w-32 rounded-full flex justify-center items-center">
                <p className="text-[50px] text-white">D</p>
              </div>
            </div>
            <div className="relative p-5 mt-12 flex flex-col gap-4">
            <div className="absolute right-6 -top-5">
              <FaPencilAlt className="text-gray-600 text-xl" />
              </div>
              <div>
                <div className="flex gap-2 items-start">
                  <p className="text-2xl font-semibold">Devendra Singh</p>
                  <div className="border-2 border-dotted border-blue-700 px-4 rounded-full text-blue-700 py-[2px] font-semibold text-sm cursor-pointer flex items-center justify-center gap-1">
                  <MdOutlineVerifiedUser />
                    <p>Add verification badge</p>
                  </div>
                </div>
                <p className="text-gray-900">Web Developer</p>
                <p className="text-gray-500 text-sm">
                  Bhopal, MAdhya Pradesh, India -{" "}
                  <span className="text-blue-700 font-semibold">Contact info</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-1 bg-blue-600 text-white rounded-full">
                  Open to
                </button>
                <button className="border border-blue-700 text-blue-700 rounded-full px-4 py-1 font-semibold">
                  Add profile section
                </button>
                <button className="border border-blue-700 text-blue-700 rounded-full px-4 py-1 font-semibold">
                  Enhance profile
                </button>
                <button className="border border-black rounded-full px-4 py-1 font-semibold">
                  Resources
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-4">
            <div className="">

            <p className="font-semibold text-xl">Suggested for you</p>
            <p className="text-sm text-gray-500">Private to you</p>
            </div>
            <div className="p-3 border border-gray-200 rounded-lg  flex flex-col gap-3 items-start">
              <div className="flex gap-3 items-center">
              <img className="w-16" src={list} alt="" />
              <p className="font-semibold">Write a summary to highloght your personality or wrok experience</p>
              </div>
              <p className="text-gray-600 text-sms">Member who include a summary recieve up to 3.9 times as many profile views</p>
              <button className="px-5 py-1 border border-gray-700 rounded-full">Add a summary</button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-4 pb-3">
            <div className="">
            <p className="font-semibold text-xl">Suggested for you</p>
            <p className="text-sm text-gray-500">Private to you</p>
            </div>
            <div className="flex gap-10">
              <div className="w-[300px] flex justify-center gap-5">
                <div><FaUserGroup className="text-3xl" /></div>
                <div>
                  <p className="font-semibold text-xl">0 profile views</p>
                  <p className="font-semibold text-gray-600">Update your prfile to attarct viewers</p>
                </div>
              </div>
              <div className="w-[300px] flex justify-center gap-6">
                <div><BsGraphUpArrow className="text-2xl "  />
                </div>
                <div>
                  <p className="font-semibold text-xl">0 post impressions</p>
                  <p className="font-semibold text-gray-600">Start a post to increase engagement.</p>
                  <p className="font-semibold text-gray-400">Past 7 days</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center  border-t border-gray-300 pt-3 cursor-pointer">
              <p className="font-semibold text-gray-500 text-[18px] ">Show all analytics </p>
              <FaArrowRight  className="text-gray-500" />
            </div>
          </div>
          <div className="relative bg-white rounded-xl p-6 flex flex-col gap-4 pb-4">
            <div className="absolute right-8 top-6 flex items-center gap-5">
                <button className="border-2 border-blue-700 rounded-full px-4 py-1 font-semibold text-blue-700">Create a post</button>
                <FaPencilAlt className="text-gray-600" />
            </div>
          <div className="">
            <p className="font-semibold text-xl">Suggested for you</p>
            <p className="text-sm text-gray-500">Private to you</p>
            </div>
            <div>
              <p className="font-semibold">You have not  poosted yet</p>
              <p className="text-gray-600 text-sm">Posts you have share will be displayed here.</p>
            </div>
            <div className="flex gap-3 items-center justify-center  border-t border-gray-300 pt-3 cursor-pointer">
              <p className="font-semibold text-gray-500 text-[18px] ">Show all activity </p>
              <FaArrowRight  className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="w-[400px] pt-6 flex flex-col gap-6 ">
          <div className="bg-white p-4 rounded-xl flex flex-col gap-5">
            <div className=" relative border-b border-gray-400 pb-5">
              <div className="absolute right-2">
              <FaPencilAlt className="text-gray-600" />
              </div>
              <p className="font-semibold text-[18px]">Profile language</p>
              <p className="text-gray-600 text-sm"> English</p>
            </div>
            <div className="relative">
            <div className="absolute right-2">
              <FaPencilAlt className="text-gray-600" />
              </div>
              <p className="font-semibold text-[18px]">Profile profile & URL</p>
              <p className="text-gray-600 text-sm">www.linkedin.com/devendrasingh123</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden cursor-pointer">
            <img src={ads} alt="" />
          </div>
          <div className="rounded-xl overflow-hidden cursor-pointer">
            <img src={ads} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;

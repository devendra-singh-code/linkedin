import React from "react";
import connection from "../../assets/connection.svg";
import { MdBookmark } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";


const Left = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className=" bg-white rounded-xl overflow-hidden">
        <div className=" relative h-16 bg-gray-400">
          <div className=" absolute top-8  left-6 h-16  flex items-center justify-center w-16 bg-green-600 rounded-full border-2 border-white">
            <p className="text-[40px] text-white">D</p>
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col mt-10">
          <p className="text-xl font-semibold text-gray-8">Devendra Singh</p>
          <p className="text-[12px] text-gray-900">Web Developer</p>
          <p className="text-[12px] text-gray-500">Bhopal, Madhya Pradesh</p>
          <p className="bg-gray-100 p-1 pl-3 font- text-sm border-2 border-dotted rounded-md border-gray-300 mt-4 text-gray-500 cursor-pointer hover:border-2 hover:border-blue-700 hover:text-gray-800">
            {" "}
            + Experience
          </p>
        </div>
      </div>
      <div className="px-4 py-3 bg-white rounded-xl">
        <p className="text-[12px] text-gray-500">Grow your career with Premium</p>
        <p className="text-[12px] font-semibold hover:text-blue-700 cursor-pointer hover:underline">Dont miss: Premium for $0</p>
      </div>
      <div className="px-4 py-3 bg-white rounded-xl">
        <div className="hover:underline cursor-pointer">
          <p className="text-[12px] text-gray-500 ">Connections</p>
          <p className="text-[12px] font-semibold">Discovers new connections</p>
        </div>
      </div>

      <div className="px-4 py-4 bg-white rounded-xl flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[14px] font-semibold hover:underline cursor-pointer">
        <MdBookmark className="text-base " />
          <p className="">Saved items</p>
        </div>
        <div className="flex items-center gap-2 text-[14px] font-semibold hover:underline cursor-pointer">
        <HiUserGroup className="text-base" />
          <p >Groups</p>
        </div>
        <div className="flex items-center gap-2 text-[14px] font-semibold hover:underline cursor-pointer">
        <MdEventNote className="text-base"  />
          <p>Events</p>
        </div>
      </div>
    </div>
  );
};

export default Left;

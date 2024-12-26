import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { MdAdd } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { show, dontShow } from "../store/stateSlice";


const Post = () => {
    const dispatch = useDispatch()

  return (
    <div className=" absolute z-30 top-0 left-0 bottom-0  w-full h-screen bg-black bg-opacity-65 flex items-center justify-center">
      <div className="relative bg-white p-5 rounded-2xl w-[60%] flex flex-col gap-5">
        <div onClick={() => dispatch(dontShow())} className="absolute right-6 top-4 cursor-pointer">
          <IoMdClose className="font-semibold text-2xl" />
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center">
            <p className="text-white text-3xl">D</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold text-gray-700">
                {" "}
                Devendra Singh
              </p>
              <FaCaretDown />
            </div>
            <p className="text-sm">Post to Anyone</p>
          </div>
        </div>
        <div className="w-full border border-gray-200 rounded-lg">
          <textarea
            className="w-full resize-none p-2 focus:border-none focus:outline-none"
            rows="12"
            placeholder="What do you want to talk about?"
          ></textarea>
        </div>
        <div className="flex  gap-10 items-center">
          <FaYoutube className="text-3xl text-gray-500 cursor-pointer" />
          <RiGalleryLine className="text-2xl text-gray-500 cursor-pointer" />
          <SlCalender className="text-xl text-gray-500 cursor-pointer" />
          <MdAdd className="text-2xl text-gray-500 cursor-pointer" />
        </div>
        <div className="flex w-full items-center justify-end gap-3">
          <FaRegClock className="cursor-pointer"/>
          <button className="px-4 py-1 rounded-lg text-base text-gray-800 font-semibold cursor-pointer bg-gray-400">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React from 'react'
import { FaList } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { MdEventNote } from "react-icons/md";
import logo from '../../assets/linkedin.png'


const Left = () => {
  return (
    <div  className="flex flex-col gap-3">
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
          <p className="bg-gray-100 p-1 pl-3 font- text-sm border border-dotted rounded-md border-black mt-4 text-gray-500 cursor-pointer">
            {" "}
            + Experience
          </p>
        </div>
      </div>
      <div className="px-4 py-4 bg-white rounded-xl flex flex-col gap-4">
        <div className="flex items-center gap-3 text-[12px] font-semibold hover:underline cursor-pointer">
        <FaList  className="text-sm" />
          <p className="text-[16px]">Preferences</p>
        </div>
        <div className="flex items-center gap-3 text-[12px] font-semibold hover:underline cursor-pointer">
        <IoBookmarkSharp  className="text-base" />
          <p className='text-base'>My jobs</p>
        </div>
        <div className="flex items-center gap-3 text-[12px] font-semibold hover:underline cursor-pointer">
        <MdEventNote  className="text-base"  />
          <p className='text-base'>Interview prep</p>
        </div>
        <div className="flex items-center gap-3 text-[12px] font-semibold border-t border-blue-300 pt-3 hover:underline cursor-pointer">
        <SlNote className="text-base text-blue-700"  />
          <p className='text-base text-blue-700'>Post a free job</p>
        </div>
      </div>
      <div className='px-4 py-4 flex flex-wrap gap-2 items-center justify-center rounded-xl'>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>About</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Accessibilty</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Help Center</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Privacy & Terms</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Ad Choice</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Advertising</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900 '>Business Service</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>Get the linkedIn app</p>
        <p className='text-[12px] font-semibold text-gray-700 cursor-pointer hover:underline hover:text-gray-900'>More</p>
      </div>
      <div className='px-4 rounded-xl flex items-center gap-2'>
        <img className='w-20' src={logo} alt="" />
        <p className='text-[12px] font-semibold text-gray-600'>LinkedIn Corporation @ 2024</p>
      </div>
    </div>
  )
}

export default Left

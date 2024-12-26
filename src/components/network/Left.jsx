import React from 'react'
import { FaList } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { MdEventNote } from "react-icons/md";
import logo from '../../assets/linkedin.png'
import { FaUserGroup } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiPagesLine } from "react-icons/ri";
import { RiNewsLine } from "react-icons/ri";

const Left = () => {
  return (
    <div  className="flex flex-col gap-3">
   
    <div className=" bg-white rounded-xl flex flex-col">
        <div className='border-b border-gray-300 p-3'>
        <p className='text-base font-semibold'>Manage my network</p>

        </div>
    <div className=' p-4 flex flex-col gap-4' >

      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <FaUserGroup   className="text-sm" />
        <p className="text-[16px]">Connections</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <TiContacts   className="text-base" />
        <p className='text-base'>Contacts</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <FaUser   className="text-base"  />
        <p className='text-base'>Following & followers</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <FaPeopleGroup   className="text-base"  />
        <p className='text-base'>Groups</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <SlCalender  className="text-base"  />
        <p className='text-base'>Events</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <RiPagesLine  className="text-base"  />
        <p className='text-base'>Pages</p>
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-[12px] font-semibold hover:underline cursor-pointer">
      <RiNewsLine  className="text-base"  />
        <p className='text-base'>Newsletters</p>
      </div>
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

import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { IoChevronUp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import minilogo from "../assets/minilogo.png";
import { useDispatch, useSelector } from "react-redux";
import { message } from "../store/stateSlice";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Mesaging = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  const [messageOptions, setMessageOptions] = useState(false);
  const [select, setSelect] = useState("focused")
  const [search, setSearch] = useState(false)

  const messageHandle = (e) => {
    if (showMessage === true) {
      e.stopPropagation();
      setNewMessage((prev) => !prev);
    }
  };
  const messageHandle1 = () => {
    setMessageOptions(false);
    setNewMessage(false);
    setShowMessage((prev) => !prev);
  };
  const messageOption = (e) => {
    e.stopPropagation();
    setMessageOptions((prev) => !prev);
  };

  return (
    <>
      <div className="flex gap-2">
        {newMessage && (
          <div className="h-[460px] w-[400px] bg-white border border-gray-400 rounded-lg">
            <div className="flex items-center justify-between py-2 px-3 border-b border-gray-200">
              <p className="font-semibold text-sm">New message</p>
              <div className="flex gap-2 items-center">
                <MdOutlineCloseFullscreen className="text-gray-700 text-lg" />
                <IoClose
                  onClick={() => setNewMessage(false)}
                  className="text-gray-700 text-lg cursor-pointer"
                />
              </div>
            </div>
            <div className="border border-gray-300 py-2 px-3">
              <input
                type="text"
                placeholder="type a name or multiples name"
                className="w-full border-none outline-none placeholder:text-sm text-sm font-semibold"
              />
            </div>
          </div>
        )}

        <div className="bg-white px-4 py-2 flex flex-col  justify-between w-[320px] border border-gray-400 rounded-lg">
          <div
            onClick={messageHandle1}
            className="flex justify-between items-center w-full cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-600 rounded-full w-8 h-8  flex items-center justify-center">
                <p className="text-white text-sm">D</p>
              </div>
              <p className="font-semibold text-[14px]">Messaging</p>
            </div>
            <div className="flex items-center gap-3">
              <div onClick={messageOption} className="relative">
                <BsThreeDots className="text-base" />
                {messageOptions && (
                  <div className="absolute bg-white py-2 px-1 -right-4 top-8 w-[250px]  border border-gray-400 rounded-lg">
                    <p className="px-3 py-2 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-200">
                      Message conversration
                    </p>
                    <p className="px-3 py-2 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-200">
                      Message settings
                    </p>
                    <p className="px-3 py-2 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-200">
                      Set away message
                    </p>
                  </div>
                )}
              </div>
              <PiNotePencilBold onClick={messageHandle} className="text-base" />
              <IoChevronUp className="text-base" />
            </div>
          </div>

          {showMessage && (
            <div className="flex flex-col gap-2 mt-3 h-[400px]">
              <div className="flex items-center justify-between  bg-blue-100 py-1 px-2 rounded-md ">
                <div className="flex items-center gap-2">
                  <IoSearch />
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="bg-transparent outline-none border-none font-semibold"
                  />
                </div>
                <GiSettingsKnobs />
              </div>
              
              <div className="flex">
                <p onClick={() => setSelect('focused')} className={`w-full text-[14px] text-center ${select === 'focused' ? 'border-gray-500' : 'border-white'} border-b-2 border-gray-500 p-2 font-semibold cursor-pointer`}>
                  Focused
                </p>
                <p onClick={() => setSelect('other')} className={`w-full text-[14px] text-center p-2 font-semibold ${select === 'other' ? 'border-gray-500' : 'border-white'} border-b-2  cursor-pointer`}>
                  Other
                </p>
              </div>


              {select === 'focused' && 
              <div className="flex items-start gap-2">
                <div className="w-14">
                  <img src={minilogo} className="w-full" alt="" />
                </div>
                <div>
                  <p className="font-semibold ">LinkedIn</p>
                  <p className="text-gray-900 text-[12px] leading-tight">
                    LinkedIn Offer. Hi, there, Devendra.We are recently seen
                  </p>
                </div>
              </div>
              }

            {select === 'other' &&
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-semibold text-2xl text-gray-500 my-4">No messages yet</p>
                <p className="text-center text-sm text-gray-500">Reach out and start a conversation to advance your career</p>
                <button className="px-5 py-1 rounded-full border-2 text-lg border-gray-500 text-gray-500 font-semibold">Send a message</button>
              </div>
              }

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Mesaging;

import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { MdLocationSearching } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { messageBtn1, messageBtn2, messageBtn3 } from "../../store/stateSlice";

const Left = () => {
  const dispatch = useDispatch();
  const [option, setOption] = useState('')

  const option1 = useSelector((state) => state.stateManage.messageOption1)
  const option2 = useSelector((state) => state.stateManage.messageOption2)
  const option3 = useSelector((state) => state.stateManage.messageOption3)
  // const option = useSelector(state => state.stateManage.profileBtn)
  console.log(option1)

  const handleOption = (e, option) => {
    if(option1 === false || option2 === false || option3 === false){
      e.stopPropagation()
    }
    if(option === "option1"){
      dispatch(messageBtn1())
    } else if(option === 'option2'){
      dispatch(messageBtn2())
    }else if(option === 'option3'){
      dispatch(messageBtn3())
    }

  }

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div>
        <div className="flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Message</p>
            <div className="flex items-center gap-3 bg-blue-100 px-2 py-1 rounded-md">
              <MdLocationSearching />
              <input
                className="bg-transparent outline-none border-none placeholder:text-black"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex text-xl gap-4">
            <div onClick={(e) => handleOption(e, 'option3')} className="relative">
            <BsThreeDots className="cursor-pointer" />
            {option3 && 
              <div className="absolute flex flex-col  right-2 bg-white p-2 w-[250px] border border-gray-400 rounded-lg ">
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Manage Conversations</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Set away message</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Manage settings</p>
              </div>
              }

            </div>
            <PiNotePencilBold className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-3 py-2 px-4 border-t border-gray-200">
          <div onClick={(e) => handleOption(e, 'option1')} className="relative pr-3  border-r-2 border-gray-400">
            <button className="flex items-center gap-2 font-semibold bg-green-600 rounded-full px-5 py-1 text-white">
              Focused <FaCaretDown />
            </button>
            {option1 && 
            <div className="absolute flex flex-col  left-2 top-10 bg-white p-3 w-[200px] border border-gray-400 rounded-lg ">
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Focused</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Other</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Archieve</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Spam</p>
              </div>
            }
          </div>
          <button className="px-5 py-1 border border-gray-600 text-gray-600 rounded-full font-semibold">
            Unread
          </button>
          <button className="px-5 py-1 border border-gray-600 text-gray-600 rounded-full font-semibold">
            My Connections
          </button>
          <button className="px-5 py-1 border border-gray-600 text-gray-600 rounded-full font-semibold">
            InMail
          </button>
          <button className="px-5 py-1 border border-gray-600 text-gray-600 rounded-full font-semibold">
            Starred
          </button>
        </div>
        <div className="flex">
          <div className="w-[470px]">
            <div className="border-l-[3px] border-green-700 bg-gray-200 cursor-pointer ">
              <div className="p-3 flex gap-3 items-center">
                <div
                  className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center
                    "
                >
                  <p className="text-white text-2xl">D</p>
                </div>
                <div className="flex flex-col leading-tight">
                  <p className="font-semibold">Monika Sharma</p>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    Sponsered <span>Join Our</span>
                  </p>
                  <p className="text-gray-500 text-sm">Upcoming Hiring Drive</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="p-2 flex items-start justify-between border-b border-gray-200">
              <div className="text-sm">
                <p className="font-semibold">Monika Sharma</p>
                <p className="text-gray-500">Marketing Consltant | Helping Business</p>
              </div>
              <div className="flex gap-3 text-xl">
                <div onClick={(e) => handleOption(e, 'option2')} className="relative">
                <BsThreeDots className="cursor-pointer" />
              {option2 && 
                <div className="absolute flex flex-col  right-2 bg-white p-3 w-[300px] border border-gray-400 rounded-lg ">
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Move to Other</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Mark as unread</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200"> Star</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Archieve</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Hide or report this ad</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Delete conversation</p>
                  <p className="text-[14px] font-semibold text-gray-600 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200">Why am I seeing this ad?</p>
              </div>
                }

                </div>
                <FaRegStar className="cursor-pointer" />
              </div>
            </div>
            <div className="p-2 flex flex-col items-start gap-3 border-b border-gray-200 ">
                <div className="flex justify-between items-center w-full text-sm">
                <p className="text-gray-400">Sponsered</p>
                <p className="text-gray-400">Nov 22</p>
                </div>
                <p className="font-semibold text-sm">Join Our Upcomming Hiring Drive! Folllow us Now!</p>
                <button className="bg-blue-600 rounded-full px-6 py-1  text-white font-semibold">Follow here!</button>
            </div>
                <div className="flex p-3  gap-4">
                <div
                  className="bg-green-600 w-14 h-12 rounded-full flex items-center justify-center ">
                  <p className="text-white text-2xl">D</p>
                </div>
                    <div className=" flex flex-col gap-5 w-full">
                        <div className=" text-sm">

                        <p className="font-semibold">Monika Sharma</p>
                        <p className="text-gray-600s">Hello Devendra!</p>
                        </div>
                        <div className="h-[150px] w-full overflow-y-scroll text-sm">
                            <p>React is a JavaScript library developed by Facebook that, among other things, was used to build Instagram.com. It aims to allow developers to easily create user interfaces for websites, desktop apps and mobile applications. A React application usually works fast and efficientl</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;

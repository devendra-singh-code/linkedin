import React, { useState } from "react";
import logo from "../../assets/business.svg";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { businessState } from "../../store/stateSlice";
import talent from "../../assets/talent.png";
import group from "../../assets/group.png";
import jobs from "../../assets/jobs.png";
import find from "../../assets/find.png";
import advertise from "../../assets/advertise.png";
import service from "../../assets/service.png";

const Business = () => {
  const option = useSelector((state) => state.stateManage.businessBtn);
  const dispatch = useDispatch();
  // const [option, setOption] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => dispatch(businessState())}
        className=" flex flex-col items-center cursor-pointer rounded-md"
      >
        <div className=" w-6 h-6 flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center text-gray-600">
          <p className="text-[12px] text-gray-600">Business</p>
          <FaCaretDown />
        </div>
      </div>
      {option && (
        <div className="absolute top-16 right-2 z-20 bg-white p-8 border border-gray-400 rounded-xl w-[650px] flex flex-col gap-3">
          <div className="flex  justify-between">
            <div className="flex flex-col gap-9">
              <p className="text-2xl font-semibold">My Apps</p>
              <div className="flex flex-col gap-6">
                <div className=" flex flex-col gap-3">
                  <div className="flex items-center gap-6 hover:underline cursor-pointer">
                    <img className="w-8" src={find} alt="" />
                    <p className="text-[16spx] font-semibold text-gray-800 ">
                      Find Leads
                    </p>
                  </div>
                  <div className="flex items-center gap-6 hover:underline cursor-pointer">
                    <img className="w-8" src={group} alt="" />
                    <p className="text-[16px] font-semibold text-gray-800">
                      Groups
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <p className="text-gray-600">Talent</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6 hover:underline cursor-pointer">
                      <img className="w-8" src={talent} alt="" />
                      <p className="text-[16px] font-semibold text-gray-800">
                        Talent Insights
                      </p>
                    </div>
                    <div className="flex items-center gap-6 hover:underline cursor-pointer">
                      <img className="w-8" src={jobs} alt="" />
                      <p className="text-[16px] font-semibold text-gray-800">
                        Post a job
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <p className="text-gray-600"> Sales</p>
                  <div className="flex items-center gap-6 hover:underline cursor-pointer ">
                    <img className="w-8" src={service} alt="" />
                    <p className="text-[16px] font-semibold text-gray-800">
                      Services MarketPlace
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-5">
                  <p className="text-gray-600">Marking</p>
                  <div className="flex items-center gap-6 hover:underline cursor-pointer">
                    <img className="w-8" src={advertise} alt="" />
                    <p className="text-[16px] font-semibold text-gray-800">
                      Advertise
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-2xl font-semibold" s>
                {" "}
                Explore more for business
              </p>
              <div className="flex flex-col gap-8">
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Hire on LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    Find attract and recurit talent
                  </p>
                </div>
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Sell with LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    Unlock sales opportunites
                  </p>
                </div>
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Post a job for free</p>
                  <p className="text-gray-600 text-sm">
                    Get qualified applicants quickly
                  </p>
                </div>
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Advertise on LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    Axquire customers and grow your business
                  </p>
                </div>
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Get started with Premium</p>
                  <p className="text-gray-600 text-sm">
                    Expand and leverage your network
                  </p>
                </div>
                <div className="hover:underline cursor-pointer">
                  <p className="font-semibold">Lean with LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    Courses to develop your employess
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Business;

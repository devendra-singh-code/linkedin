import React from "react";
import Left from "../components/Main/Left";
import Right from "../components/Main/Right";
import Middle from "../components/Main/Middle";

const Main = () => {
  return (
    <div className={`w-full pt-[50px]`}>
      <div className="z-10 flex gap-5 md:px-4 py-6">
        <div className="flex justify-center  gap-5 sm:flex-row flex-col">
          <div className="md:w-[350px] w-full z-10">
            <Left />
          </div>
          <div className=" w-full   z-10 ">
            <Middle />
          </div>
        </div>

        <div className=" w-[480px] min-w-[300px] z-10 md:block hidden ">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Main;

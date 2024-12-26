import React from "react";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { ImNotification } from "react-icons/im";

const Options = () => {
  return (
    <div className="w-[300px] flex flex-col gap-6">
      <div className="flex items-center gap-4 ">
        <IoBookmarkSharp className="text-xl" />
        <p className="font-semibold text-gray-600">Save</p>
      </div>
      <div className="flex items-center gap-4">
        <FaLink  className="text-xl"/>
        <p className="font-semibold text-gray-600">Copy link to post</p>
      </div>
      <div className="flex items-center gap-4">
        <RiCodeSSlashLine  className="text-xl" />
        <p className="font-semibold text-gray-600">Embed this post</p>
      </div>
      <div className="flex items-center gap-4">
        <FaEyeSlash  className="text-xl"/>
        <p className="font-semibold text-gray-600">Hide or report this ad</p>
      </div>
      <div className="flex items-center gap-4">
        <ImNotification  className="text-xl"/>
        <p className="font-semibold text-gray-600">Why am I seeing this ad?</p>
      </div>
    </div>
  );
};

export default Options;

import React from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="border bg-blue-600  outline-none px-7 cursor-pointer py-[10px] rounded-full text-base font-semibold text-blue-100"
    >
      Logout
    </button>
  );
};

export default LogoutButn;

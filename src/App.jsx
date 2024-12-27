import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Post from "./components/Post";
import { closeAll } from "./store/stateSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const addPost = useSelector((state) => state.stateManage.status);

  if (addPost === true) {
    document.body.style.overflow = "hidden";
  } else if (addPost === false) {
    document.body.style.overflow = "";
  }

  const handleOut = () => {
    dispatch(closeAll());
  };

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      {addPost && <Post />}
      <div className="">
        <Header />
      </div>
      <div onClick={handleOut} className="bg-white">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  ) : null;
};

export default App;

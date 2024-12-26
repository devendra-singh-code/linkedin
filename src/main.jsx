import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import GetApp from "./pages/GetApp.jsx";
import Games from "./pages/Games.jsx";
import Jobs from "./pages/Jobs.jsx";
import Learning from "./pages/Learning.jsx";
import People from "./pages/People.jsx";
import Articles from "./pages/Articles.jsx";
import Main from "./pages/MAin.jsx";
import LoginHome from "./pages/LoginHome.jsx";
import Network from "./pages/Network.jsx";
import Message from "./pages/Message.jsx";
import Notification from "./pages/Notification.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/people" element={<People />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/games" element={<Games />} />
      <Route path="/app" element={<GetApp />} />
      <Route path="/home" element={<LoginHome />} />
      <Route path="/network" element={<Network />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notification" element={<Notification />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </StrictMode>
);

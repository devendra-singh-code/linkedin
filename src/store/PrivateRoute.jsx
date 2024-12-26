import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = () => {
    const user = true;
    return user ? <>  <Outlet /> </>: <Navigate to='/login' />
}

export default PrivateRoute
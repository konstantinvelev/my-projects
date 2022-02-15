import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function LoggedRoutes() {
    const { user } = useContext(AuthContext);

    return user.id !== '' ? <Outlet/> : <Navigate to='/login'/>;
}
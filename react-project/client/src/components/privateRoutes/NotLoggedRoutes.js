import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function NotLoggedRoutes(){
    const {user} = useContext(AuthContext);

    return (user.id === '' || user.id === undefined || !!user.message) ? <Outlet/> : <Navigate to='/'/>
}
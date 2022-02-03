import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function NotLoggedRoutes(){
    const {user} = useContext(AuthContext);

    return (user.email === '' || !!user.message) ? <Outlet/> : <Navigate to='/'/>
}
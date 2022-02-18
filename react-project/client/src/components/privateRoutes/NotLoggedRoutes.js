import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export function NotLoggedRoutes() {
    const { user } = useAuthContext();

    return (user.id === '' || user.id === undefined || !!user.message) ? <Outlet /> : <Navigate to='/' />
}
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export function LoggedRoutes() {
    const { user } = useAuthContext();

    return user.id !== '' ? <Outlet /> : <Navigate to='/login' />;
}
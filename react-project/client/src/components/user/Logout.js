import { useNavigate } from "react-router-dom";

import { useAuthContext } from '../../hooks/useAuthContext';
import * as authService from '../../services/authServices';


export function Logout() {
    let { logout } = useAuthContext();
    let navigate = useNavigate();

    authService.logout()
        .then(res => {
            logout();
            navigate('/login')
        })

    return null;
}
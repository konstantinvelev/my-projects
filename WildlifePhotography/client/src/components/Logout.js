import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import * as authService from '../services/authServices';


export function Logout() {
    let {logout} = useContext(AuthContext);
    let navigate = useNavigate();

    authService.logout()
        .then(res => {
            logout();
            navigate('/login')
        })
    return null;
}
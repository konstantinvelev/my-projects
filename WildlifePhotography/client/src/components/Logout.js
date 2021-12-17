import { useNavigate } from "react-router-dom";
import * as authService from '../services/authServices';

export function Logout() {
    let navigate = useNavigate();

    authService.logout()
        .then(res => {
            navigate('/login')
        })
    return null;
}
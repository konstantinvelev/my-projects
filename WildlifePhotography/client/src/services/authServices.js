// import { Navigate } from "react-router-dom";
// let navigate = Navigate();
const baseUrl = 'http://localhost:3005/api/users';

export const register = async (data) => {
    let res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    let result = await res.json();
    if (res.ok) {
        setLocalStorage(result);
        return result
    }
    //navigate('/register');
}


export const login = async (data) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    let result = await res.json();

    if (res.ok) {
        setLocalStorage(result);
        return result;
    }
    //navigate('/login');
}

export const logout = async () => {
    let res = await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        }
    });

    if (res.ok) {
        removeLocalStorage();
    }
}

export const isAutenticated = () => {
    if (!!localStorage.getItem('user')) {
        return true;
    }
    return false;
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}
function setLocalStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

function removeLocalStorage() {
    localStorage.removeItem('user');
}
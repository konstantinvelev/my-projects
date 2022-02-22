import Cookies from 'js-cookie';
import {ngNetBaseUrl, cookieKey,apiKey} from '../components/common/authConfig';
export const token = Cookies.get(cookieKey);

export const register = async (data) => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(data)
        });
        
        return await res.json();
    } catch (error) {
        return error;
    }
}


export const login = async (data) => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(data)
        });
        
        let result = await res.json();

        if (res.ok) {
            Cookies.set('token', result.token)
            return parseToken(result.token);
        }
        return result;
    } catch (error) {
        return error;
    }
}

export const logout = async () => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/user/logout`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'x-api-key': apiKey,
                'authorization': token ? 'Bearer ' + token : '',
            }
        });

        if (res.ok) {
            Cookies.remove('token')
        }
        return await res.json();
    } catch (error) {
        return error;
    }
}

export const getUserById = async (id) => {
    let res = await fetch(`${ngNetBaseUrl}/user/getUser/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-api-key': apiKey,
            'authorization': token ? 'Bearer ' + token : '',
        }
    });
    //let result = await res.json();

    return res;
    //return result;
}

export const getUserProfile = async () => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/user/profile`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'x-api-key': apiKey
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const getUser = () => {
    return parseToken();
}

function parseToken() {
    const token = Cookies.get(cookieKey);

    if (!token) {
        return;
    }

    try {
        const parsedToken = JSON.parse(atob(token.split('.')[1]));
        return { 
          id: parsedToken.nameid, 
          username: parsedToken.unique_name, 
        }
    } catch (error) {
        return;
    }
}
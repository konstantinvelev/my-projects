import Cookies from 'js-cookie';

const ngNetBaseUrl = 'http://localhost:7000';
const cookieKey = 'token';
const token = Cookies.get(cookieKey);

export const register = async (data) => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        let result = await res.json();
        
        return result;
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
                'authorization': token ? 'Bearer ' + token : '',
            }
        });

        let result = await res.json();

        if (res.ok) {
            Cookies.remove('token')
        }
        return result;
    } catch (error) {
        return error;
    }
}

export const getUserById = async (id) => {
    let res = await fetch(`${ngNetBaseUrl}/user/getUser/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': token ? 'Bearer ' + token : '',
        }
    });
    //let result = await res.json();

    return res;
    //return result;
}

export const getUserProfile = async () => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/profile`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            }
        });

        if (res.ok) {
            let result = await res.json();
            //setLocalStorage(result);
            return result;
        }
    } catch (error) {
        return false;
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
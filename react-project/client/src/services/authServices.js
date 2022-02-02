const nodeJsBaseUrl = 'http://localhost:3005/api/users';
const ngNetBaseUrl = 'http://localhost:5000/auth';

export const register = async (data) => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/register`, {
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
        }
        return result;
    } catch (error) {
        return false;
    }
    
}


export const login = async (data) => {
    try {
        let res = await fetch(`${ngNetBaseUrl}/login`, {
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
        }
        return result;
    } catch (error) {
        return false;
    }
    
}

export const logout = async () => {
    let res = await fetch(`${ngNetBaseUrl}/logout`, {
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

export const getUserById = async (id) => {
    let res = await fetch(`${ngNetBaseUrl}/userById/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    });

    return await res.json();
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
        
        if(res.ok){
            let result = await res.json();
            setLocalStorage(result);
            return result;
        }
    } catch (error) {
        return false;
    }
    
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

function setLocalStorage(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

function removeLocalStorage() {
    localStorage.clear();
}
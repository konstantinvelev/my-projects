const baseUrl = 'http://localhost:3005/api'

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
    //return <NotAllowed></NotAllowed> or something
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
    //return <NotAllowed></NotAllowed> or something
}

function setLocalStorage(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

function removeLocalStorage() {
    localStorage.removeItem('user');
}
const baseUrl = 'http://localhost:3005/api/posts'

export const create = async (data) => {
    let res = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        let result = await res.json();
        return result;
    }
}

export const all = async () => {
    let res = await fetch(`${baseUrl}/all`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
    });

    let result = res.json();

    if (res.ok) {
        return result;
    }
}

export const getById = async (postId) => {
    let res = await fetch(`${baseUrl}/details/${postId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
    });

    let result = await res.json();

    if (res.ok) {
        return result;
    }
}

export const edit = async (postId, data) => {
    let res = await fetch(`${baseUrl}/edit/${postId}`,{
        method: 'POST',
        credentials: 'include',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let result = await res.json();

    if(res.ok){
        return result;
    }
}
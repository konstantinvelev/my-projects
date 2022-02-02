const baseUrl = 'http://localhost:3005/api/posts'

export const create = async (data) => {
    try {
        let res = await fetch(`${baseUrl}/create`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const all = async () => {
    try {
        let res = await fetch(`${baseUrl}/all`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const allByUser = async () => {

    try {
        let res = await fetch(`${baseUrl}/allByUser`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }

}

export const getById = async (postId) => {
    try {
        let res = await fetch(`${baseUrl}/details/${postId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const edit = async (postId, data) => {
    try {
        let res = await fetch(`${baseUrl}/edit/${postId}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const remove = async (postId) => {
    try {
        let res = await fetch(`${baseUrl}/delete/${postId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}

export const like = async (postId, userId) => {
    try {
        let res = await fetch(`${baseUrl}/like/${postId}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userId })
        });

        return await res.json();
    } catch (error) {
        return error;
    }
}
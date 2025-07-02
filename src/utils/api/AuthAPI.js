import apis from "./api";

const authAPI = {
    login: async({ username, password }) => {
        const endpoint = `${apis.backendApi}/auth/login`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    logout: async() => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/auth/logout`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.delete,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            }
        });

        return fetchApi.status;
    }
};

export default authAPI;
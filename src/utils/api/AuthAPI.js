import apis from "./api";

const authAPI = {
    login: async({ email, password }) => {
        const endpoint = `${apis.backendApi}/auth/login`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    logout: async() => {
        const userSession = localStorage.getItem("user_session");
        const token = JSON.parse(userSession).token;

        const endpoint = `${apis.backendApi}/auth/logout`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return fetchApi.status;
    }
};

export default authAPI;
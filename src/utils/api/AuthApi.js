import apis from "./api";

export const authenticationApi = async({ email, password }) => {
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
}
const apis = {
    backendApi: import.meta.env.VITE_API_ENDPOINT,
    method: {
        post: 'POST',
        get: 'GET',
        put: 'PUT',
        delete: 'DELETE'
    },
};

export default apis;
import apis from '../api.js';

const userAPI = {
    create: async (request) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/users`;

        const formData = new FormData();
        formData.append('username', request.username);
        formData.append('name', request.name);
        formData.append('email', request.email);
        formData.append('password', request.password);
        formData.append('active', request.active);
        formData.append('gelar', request.gelar);
        formData.append('role', request.role);

        if( request.profile_image.file ) formData.append('profile_image', request.profile_image.file);
        if( request.signature.file ) formData.append('signature', request.signature.file);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            },
            body: formData,
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    update: async(userId, request) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/users/${userId}`;
        const formData = new FormData();

        formData.append('username', request.username);
        formData.append('name', request.name);
        formData.append('email', request.email);
        formData.append('password', request.password ?? null);
        formData.append('active', request.active);
        formData.append('old_profile_image', request.oldProfileImage.file);
        formData.append('old_signature', request.oldSignature.file);
        formData.append('gelar', request.gelar);
        formData.append('role', request.role);

        if( request.profile_image.file ) formData.append('profile_image', request.profile_image.file);
        if( request.signature.file ) formData.append('signature', request.signature.file);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            },
            body: formData
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    getAll: async(search, page) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = page ? new URL(page) : new URL(`${apis.backendApi}/users`);

        if( search.name ) endpoint.searchParams.append('name', search.name);
        if( search.email ) endpoint.searchParams.append('email', search.email);
        if( search.username ) endpoint.searchParams.append('username', search.username);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: 'cors',
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    detail: async(id) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/users/${id}`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    getAllRole: async() => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/users/roles`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        }
    }
};

export default userAPI;
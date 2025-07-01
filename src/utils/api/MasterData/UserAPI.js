import apis from '../api.js';

const userSession = localStorage.getItem("user_session");
const token = JSON.parse(userSession).token;
const presetHeaders = {
    'Authorization': `Bearer ${token}`
};

const userAPI = {
    create: async (request) => {
        const endpoint = `${apis.backendApi}/users`;
        presetHeaders['X-Requested-With'] = 'XMLHttpRequest';

        const formData = new FormData();
        formData.append('name', request.name);
        formData.append('email', request.email);
        formData.append('password', request.password);
        formData.append('active', request.active);

        if( request.image ) formData.append('profile_image', request.image);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: presetHeaders,
            body: formData,
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    update: async(userId, request) => {
        const endpoint = `${apis.backendApi}/users/${userId}`;
        const formData = new FormData();
        presetHeaders['X-Requested-With'] = 'XMLHttpRequest';

        formData.append('name', request.name);
        formData.append('email', request.email);
        formData.append('password', request.password ?? null);
        formData.append('active', request.active);
        formData.append('old_profile_image', request.oldProfileImage.file);

        if( request.image ) formData.append('profile_image', request.image);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: presetHeaders,
            body: formData
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    getAll: async(search, page) => {
        let endpoint = new URL(`${apis.backendApi}/users`);

        if( page ) {
            endpoint = new URL(page);
        }

        if( search.name ) endpoint.searchParams.append('name', search.name);
        if( search.email ) endpoint.searchParams.append('email', search.email);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: presetHeaders,
            mode: 'cors',
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    detail: async(id) => {
        const endpoint = `${apis.backendApi}/users/${id}`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: presetHeaders,
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    }
};

export default userAPI;
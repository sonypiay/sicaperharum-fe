import apis from '../api.js';

const userSession = localStorage.getItem("user_session");
const token = userSession ? JSON.parse(userSession).token : null;
const presetHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
};

const klasterAPI = {
    create: async ({nama, active}) => {
        const endpoint = `${apis.backendApi}/master-data/klaster`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: presetHeaders,
            body: JSON.stringify({
                title: nama,
                active: active
            })
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    update: async({ id, nama, active }) => {
        const endpoint = `${apis.backendApi}/master-data/klaster/${id}`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.put,
            headers: presetHeaders,
            body: JSON.stringify({
                title: nama,
                active: active
            })
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    getAll: async(search) => {
        const endpoint = new URL(`${apis.backendApi}/master-data/klaster`);
        if( search.title ) endpoint.searchParams.append('title', search.title);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: presetHeaders,
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    detail: async(id) => {
        const endpoint = `${apis.backendApi}/master-data/klaster/${id}`;
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

export default klasterAPI;
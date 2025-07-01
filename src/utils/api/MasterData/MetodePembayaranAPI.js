import apis from "../api.js";

const userSession = localStorage.getItem("user_session");
const token = JSON.parse(userSession).token;
const presetHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
};

const metodePembayaranAPI = {
    create: async ({nama, active}) => {
        const endpoint = `${apis.backendApi}/master-data/metode-pembayaran`;

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
        const endpoint = `${apis.backendApi}/master-data/metode-pembayaran/${id}`;

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
        const endpoint = new URL(`${apis.backendApi}/master-data/metode-pembayaran`);
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
        const endpoint = `${apis.backendApi}/master-data/metode-pembayaran/${id}`;
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

export default metodePembayaranAPI;
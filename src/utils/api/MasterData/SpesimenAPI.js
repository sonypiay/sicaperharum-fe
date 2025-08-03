import apis from '../api.js';

const SpesimenAPI = {
    create: async ({nama, active}) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/master-data/spesimen`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
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
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/master-data/spesimen/${id}`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.put,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
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
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = new URL(`${apis.backendApi}/master-data/spesimen`);

        if( search ) {
            if( search.title ) endpoint.searchParams.append('title', search.title);
        }

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
    detail: async(id) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/master-data/spesimen/${id}`;
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
    }
};

export default SpesimenAPI;
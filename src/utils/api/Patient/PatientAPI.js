import apis from "../api.js";
import {useRoute} from "vue-router";

const patientAPI = {
    create: async (request) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.post,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(request)
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    update: async(id, request) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/${id}`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.put,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(request)
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    getAll: async(search, page) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = page ? new URL(page) : new URL(`${apis.backendApi}/patients`);

        if( search.medical_number  ) endpoint.searchParams.append('medical_number', search.medical_number);
        if( search.name ) endpoint.searchParams.append('name', search.name);
        if( search.gender ) endpoint.searchParams.append('gender', search.gender);
        if( search.phone_number ) endpoint.searchParams.append('phone_number', search.phone_number);

        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            }
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    detail: async() => {
        const id = useRoute().params.id;
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/${id}`;

        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            }
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    },
    findPatientByMedicalNumber: async(medicalNumber) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/search?medical_number=${medicalNumber}`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.get,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${userToken}`
            }
        });

        return {
            data: await fetchApi.json(),
            statusCode: fetchApi.status
        };
    }
}

export default patientAPI;
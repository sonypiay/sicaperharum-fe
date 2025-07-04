import apis from "../api.js";
import dayjs from "dayjs";

const patientMedicalRecordAPI = {
    getRegisterNumber: async() => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/medical-records/generate-number`;
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
        }
    },
    create: async(request) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/medical-records/register`;
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
    getAll: async(search, page) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = page ? new URL(page) : new URL(`${apis.backendApi}/patients/medical-records`);

        if( search ) {
            if( search.medical_number !== '' ) endpoint.searchParams.append('medical_number', search.medical_number);
            if( search.register_number !== '' ) endpoint.searchParams.append('register_number', search.register_number);
            if( search.klaster !== '' ) endpoint.searchParams.append('klaster', search.klaster);
            if( search.spesimen !== '' ) endpoint.searchParams.append('spesimen', search.spesimen);

            if( search.tanggal_start_pickup !== '' ) {
                endpoint.searchParams.append('tanggal_start_pickup', search.tanggal_start_pickup);
            }

            if( search.tanggal_end_pickup !== '' ) {
                endpoint.searchParams.append('tanggal_end_pickup', search.tanggal_end_pickup);
            }
        }

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
    detailMedicalRecord: async(id) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/medical-records/${id}`;
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

export default patientMedicalRecordAPI;
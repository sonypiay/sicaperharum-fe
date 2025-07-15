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
            if( search.patient_name !== '' ) endpoint.searchParams.append('patient_name', search.patient_name);
            if( search.tanggal_lahir !== '' ) endpoint.searchParams.append('tanggal_lahir', search.tanggal_lahir);
            if( search.tanggal_pickup !== '' ) endpoint.searchParams.append('tanggal_pickup', search.tanggal_pickup);
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
    },
    downloadPdf: async (registerNumber) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const userProfile = JSON.parse(localStorage.getItem('user_profile'));
        const endpoint = `${apis.backendApi}/patients/medical-records/pdf/generate/${registerNumber}?user_id=${userProfile.id}`;
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
    delete: async(id) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = `${apis.backendApi}/patients/medical-records/${id}`;
        const fetchApi = await fetch(endpoint, {
            method: apis.method.delete,
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
    urlReadPdf: (registerNumber) => {
        const userProfile = JSON.parse(localStorage.getItem('user_profile'));
        return `${apis.backendApi}/patients/medical-records/pdf/generate/${registerNumber}?user_id=${userProfile.id}`;
    },
    exportExcel: async(search) => {
        const endpoint = new URL(`${apis.backendApi}/patients/medical-records/export/excel`);

        if( search ) {
            if( search.start_date ) endpoint.searchParams.append('start_date', search.start_date);
            if( search.end_date ) endpoint.searchParams.append('end_date', search.end_date);
        }

        return endpoint.href;
    }
}

export default patientMedicalRecordAPI;
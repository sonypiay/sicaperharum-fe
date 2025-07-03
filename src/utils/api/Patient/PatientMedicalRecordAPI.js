import apis from "../api.js";

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
    }
}

export default patientMedicalRecordAPI;
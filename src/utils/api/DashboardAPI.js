import apis from "./api.js";

const dashboardAPI = {
    totalSummaryVisitor: async(date) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = new URL(`${apis.backendApi}/dashboard/summary-visitor`);

        if( date ) endpoint.searchParams.append('date', date);

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
    totalVisitorByYear: async(year) => {
        const userToken = localStorage.getItem('user_token') ?? null;
        const endpoint = new URL(`${apis.backendApi}/dashboard/visitor-by-year`);

        if( year ) endpoint.searchParams.append('year', year);

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
};

export default dashboardAPI;
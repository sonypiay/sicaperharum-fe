import Login from '../pages/Login.vue';
import Dashboard from "../pages/Dashboard.vue";
import AdminLayout from "../components/AdminLayout.vue";

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
            }
        ],
    }
];

export default routes;
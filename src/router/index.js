import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';
import {toastFailed} from "../utils/alerts.js";
import CheckPermissionAccess from "../utils/CheckPermissionAccess.js";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const userToken = localStorage.getItem('user_token') ?? null;

    if( to.meta.requiresAuth && !userToken ) {
        next({ name: 'login' });
        return;
    }

    next();
});

router.beforeEach((to, from, next) => {
    if( to.name !== 'login' && to.name !== 'access-denied' && to.name !== 'dashboard' ) {
        if( CheckPermissionAccess('read', to.meta.roles) === false ) {
            toastFailed('Anda tidak memiliki hak akses untuk mengakses halaman ini!');
            next({ name: 'dashboard' });
            return;
        }
    }

    next();
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';

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

export default router;
import Login from '../pages/Login.vue';
import Dashboard from "../pages/Dashboard.vue";
import AdminLayout from "../components/AdminLayout.vue";
import UserList from "../pages/MasterData/User/UserList.vue";
import KlasterList from "../pages/MasterData/Klaster/KlasterList.vue";
import SpesimenList from "../pages/MasterData/Spesimen/SpesimenList.vue";
import KlasterCreate from "../pages/MasterData/Klaster/KlasterCreate.vue";
import KlasterEdit from "../pages/MasterData/Klaster/KlasterEdit.vue";
import SpesimenCreate from "../pages/MasterData/Spesimen/SpesimenCreate.vue";
import SpesimenEdit from "../pages/MasterData/Spesimen/SpesimenEdit.vue";
import MetodePembayaranCreate from "../pages/MasterData/MetodePembayaran/MetodePembayaranCreate.vue";
import MetodePembayaranEdit from "../pages/MasterData/MetodePembayaran/MetodePembayaranEdit.vue";
import MetodePembayaranList from "../pages/MasterData/MetodePembayaran/MetodePembayaranList.vue";

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
                path: '',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'master',
                children: [
                    {
                        path: 'user',
                        name: 'user',
                        component: UserList,
                    },
                    {
                        path: 'klaster',
                        children: [
                            {
                                path: '',
                                name: 'list-klaster',
                                component: KlasterList,
                            },
                            {
                                path: 'create',
                                name: 'create-klaster',
                                component: KlasterCreate,
                            },
                            {
                                path: 'edit/:id',
                                name: 'edit-klaster',
                                component: KlasterEdit,
                            }
                        ]
                    },
                    {
                        path: 'spesimen',
                        children: [
                            {
                                path: '',
                                name: 'list-spesimen',
                                component: SpesimenList,
                            },
                            {
                                path: 'create',
                                name: 'create-spesimen',
                                component: SpesimenCreate,
                            },
                            {
                                path: 'edit/:id',
                                name: 'edit-spesimen',
                                component: SpesimenEdit,
                            }
                        ]
                    },
                    {
                        path: 'metode-pembayaran',
                        children: [
                            {
                                path: '',
                                name: 'list-metode-pembayaran',
                                component: MetodePembayaranList,
                            },
                            {
                                path: 'create',
                                name: 'create-metode-pembayaran',
                                component: MetodePembayaranCreate,
                            },
                            {
                                path: 'edit/:id',
                                name: 'edit-metode-pembayaran',
                                component: MetodePembayaranEdit,
                            }
                        ]
                    },
                ]
            }
        ],
    }
];

export default routes;
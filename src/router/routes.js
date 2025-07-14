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
import UserCreate from "../pages/MasterData/User/UserCreate.vue";
import UserEdit from "../pages/MasterData/User/UserEdit.vue";
import PatientList from "../pages/Patient/PatientList.vue";
import PatientCreate from "../pages/Patient/PatientCreate.vue";
import PatientEdit from "../pages/Patient/PatientEdit.vue";
import RegisterMedicalRecord from "../pages/Patient/MedicalRecords/RegisterMedicalRecord.vue";
import RegisterPatient from "../pages/Patient/MedicalRecords/RegisterPatient.vue";
import PatientVisitorDetail from "../pages/Patient/PatientVisitorDetail.vue";
import PatientVisitorList from "../pages/Patient/PatientVisitorList.vue";
import Reports from "../pages/Reports.vue";
import AccessDenied from "../pages/AccessDenied.vue";

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/admin',
        component: AdminLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    roles: {
                        superadmin: {
                            read: true,
                        },
                        admin: {
                            read: true,
                        },
                        user: {
                            read: true,
                        },
                    }
                },
            },
            {
                path: '/reports',
                name: 'reports',
                component: Reports,
                meta: {
                    roles: {
                        superadmin: {
                            read: true,
                        },
                        admin: {
                            read: true,
                        },
                        user: {
                            read: true,
                        },
                    }
                },
            },
            {
                path: 'patients',
                children: [
                    {
                        path: '',
                        name: 'list-patients',
                        component: PatientList,
                    },
                    {
                        path: 'create',
                        name: 'create-patient',
                        component: PatientCreate,
                    },
                    {
                        path: 'edit/:id',
                        name: 'edit-patient',
                        component: PatientEdit,
                    },
                ],
                meta: {
                    roles: {
                        superadmin: {
                            read: true,
                            write: true,
                            delete: true,
                        },
                        admin: {
                            read: true,
                            write: true,
                            delete: true,
                        },
                        user: {
                            read: true,
                            write: false,
                            delete: false,
                        },
                    }
                }
            },
            {
                path: 'visitor',
                children: [
                    {
                        path: '',
                        name: 'list-visitor-patient',
                        component: PatientVisitorList,
                    },
                    {
                        path: 'patient',
                        name: 'form-register-patient',
                        component: RegisterPatient,
                    },
                    {
                        path: 'medical-record',
                        name: 'form-register-medical-record',
                        component: RegisterMedicalRecord,
                    },
                    {
                        path: 'medical-record/:registerNumber',
                        name: 'visitor-detail',
                        component: PatientVisitorDetail
                    }
                ],
                meta: {
                    roles: {
                        superadmin: {
                            read: true,
                            write: true,
                            delete: true,
                        },
                        admin: {
                            read: true,
                            write: true,
                            delete: true,
                        },
                        user: {
                            read: true,
                            write: false,
                            delete: false,
                        },
                    }
                }
            },
            {
                path: 'master',
                children: [
                    {
                        path: 'user',
                        children: [
                            {
                                path: '',
                                name: 'list-user',
                                component: UserList,
                            },
                            {
                                path: 'create',
                                name: 'create-user',
                                component: UserCreate,
                            },
                            {
                                path: 'edit/:id',
                                name: 'edit-user',
                                component: UserEdit
                            }
                        ],
                        meta: {
                            roles: {
                                superadmin: {
                                    read: true,
                                    write: true,
                                    delete: true,
                                },
                                admin: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                },
                                user: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                }
                            },
                        }
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
                        ],
                        meta: {
                            roles: {
                                superadmin: {
                                    read: true,
                                    write: true,
                                    delete: true,
                                },
                                admin: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                },
                                user: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                }
                            }
                        }
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
                        ],
                        meta: {
                            roles: {
                                superadmin: {
                                    read: true,
                                    write: true,
                                    delete: true,
                                },
                                admin: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                },
                                user: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                }
                            }
                        }
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
                        ],
                        meta: {
                            roles: {
                                superadmin: {
                                    read: true,
                                    write: true,
                                    delete: true,
                                },
                                admin: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                },
                                user: {
                                    read: false,
                                    write: false,
                                    delete: false,
                                }
                            }
                        }
                    },
                ]
            }
        ],
    },
    {
        path: '/access-denied',
        name: 'access-denied',
        component: AccessDenied,
    }
];

export default routes;
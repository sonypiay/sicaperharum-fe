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
import FormRegisterComponent from "../pages/Patient/MedicalRecords/FormRegisterComponent.vue";
import RegisterMedicalRecord from "../pages/Patient/MedicalRecords/RegisterMedicalRecord.vue";
import RegisterPatient from "../pages/Patient/MedicalRecords/RegisterPatient.vue";

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
                        component: PatientCreate
                    },
                    {
                        path: 'edit/:id',
                        name: 'edit-patient',
                        component: PatientEdit
                    },
                ],
            },
            {
                path: 'form',
                children: [
                    {
                        path: 'patient',
                        name: 'form-register-patient',
                        component: RegisterPatient,
                    },
                    {
                        path: 'medical-record',
                        name: 'form-register-medical-record',
                        component: RegisterMedicalRecord,
                    }
                ],
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
                        ]
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
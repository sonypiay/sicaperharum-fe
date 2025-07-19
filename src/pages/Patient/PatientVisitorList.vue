<script setup>

import {nextTick, onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import dayjs from "dayjs";
import {alertConfirm, toastFailed, toastSuccess} from "../../utils/alerts.js";
import patientMedicalRecordAPI from "../../utils/api/Patient/PatientMedicalRecordAPI.js";
import {datePicker} from "../../utils/datePickerUtil.js";
import klasterAPI from "../../utils/api/MasterData/KlasterAPI.js";
import spesimenAPI from "../../utils/api/MasterData/SpesimenAPI.js";
import CheckPermissionAccess from "../../utils/CheckPermissionAccess.js";

const searchField = reactive({
    register_number: '',
    medical_number: '',
    tanggal_pickup: '',
    page: 1,
    tanggal_lahir: '',
    patient_name: '',
});

const dataPatientVisitor = reactive({
    data: [],
    pagination: {
        first: 1,
        prev_page: null,
        next_page: null,
        current_page: 1,
        last: 1,
        total: 0,
        per_page: 1,
        from: 1,
        to: 1,
    },
});
const dataKlaster = ref([]);
const dataSpesimen = ref([]);
const isSearchEnable = ref(false);
const getPermission = ref({
    read: false,
    write: false,
    delete: false,
});
let instancePickupDatePicker = null;
let instanceDobPicker = null;

async function fetchPatientVisitor(page) {
    const fetchApi = await patientMedicalRecordAPI.getAll(searchField, page);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataPatientVisitor.data = responseBody.data;
        dataPatientVisitor.pagination = responseBody.pagination;
    } else {
        toastFailed(responseBody.message);
    }
}

async function fetchDataKlaster() {
    const fetchApi = await klasterAPI.getAll();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataKlaster.value = responseBody;
    } else {
        toastFailed(fetchApi.data.message);
    }
}

async function fetchDataSpesimen() {
    const fetchApi = await spesimenAPI.getAll();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataSpesimen.value = responseBody;
    } else {
        toastFailed(fetchApi.data.message);
    }
}

function handleToggleSearch() {
    isSearchEnable.value = !isSearchEnable.value;
}

function onHandleRenderDatePicker() {
    const options = {
        pickupDate: {
            dateFormat: "Y-m-d",
            altFormat: "F j, Y",
            altInput: true,
            enableTime: false,
        },
        dob: {
            dateFormat: "Y-m-d",
            altFormat: "F j, Y",
            altInput: true,
            enableTime: false,
            maxDate: "today",
        }
    };

    if( instancePickupDatePicker !== null ) {
        instancePickupDatePicker.destroy();
    }
    
    if( instanceDobPicker !== null ) {
        instanceDobPicker.destroy();
    }

    instancePickupDatePicker = datePicker("#input-tanggal-pengambilan", options.pickupDate);
    instanceDobPicker = datePicker("#input-tanggal-lahir", options.dob);
}

async function handleResetSearch() {
    searchField.register_number = '';
    searchField.medical_number = '';
    searchField.patient_name = '';
    searchField.tanggal_lahir = '';
    searchField.tanggal_pickup = '';
    searchField.page = 1;

    if( instancePickupDatePicker ) {
        instancePickupDatePicker.clear();
    }

    if( instanceDobPicker ) {
        instanceDobPicker.clear();
    }

    await fetchPatientVisitor();
}

async function handleSearch() {
    await fetchPatientVisitor();
}

async function handlePageChange(page) {
    await fetchPatientVisitor(page);
}

function handleGetPermission() {
    getPermission.value.read = CheckPermissionAccess('read');
    getPermission.value.write = CheckPermissionAccess('write');
    getPermission.value.delete = CheckPermissionAccess('delete');
}

onBeforeMount(() => {
    handleGetPermission();
})

onMounted(async () => {
    if( isSearchEnable.value === true ) {
        onHandleRenderDatePicker();
    }

    await fetchPatientVisitor();
    await fetchDataKlaster();
    await fetchDataSpesimen();
});

watch(isSearchEnable, async (newVal) => {
    if( newVal === true ) {
        await nextTick();
        onHandleRenderDatePicker();
    } else {
        if( instancePickupDatePicker ) { instancePickupDatePicker.destroy(); }
    }
});

async function handleDeleteButton(id, registerNumber) {
    const confirmDelete = await alertConfirm("Konfirmasi", `Apakah anda yakin ingin menghapus data lab ${registerNumber}?`);

    if( confirmDelete === true ) {
        const response = await patientMedicalRecordAPI.delete(id);
        const statusCode = response.statusCode;

        if( statusCode === 202 ) {
            toastSuccess(`Data hasil lab ${registerNumber} berhasil dihapus`);
            await fetchPatientVisitor();
        } else {
            toastFailed(response.data.message);
        }
    }
}

</script>

<template>
    <section class="card-section">
        <div class="uk-flex uk-flex-between">
            <div class="card-heading">Daftar Kunjungan Pasien</div>
            <div class="uk-text-right">
                <router-link :to="{name: 'form-register-patient'}" class="uk-button uk-button-primary button button-primary" v-if="getPermission.write">
                    Tambah
                </router-link>
            </div>
        </div>

        <div class="uk-card uk-card-default card-body">
            <div class="uk-flex uk-flex-between">
                <div class="card-subheading">
                    <span class="las la-search"></span> Cari
                </div>
                <div class="uk-text-right">
                    <a href="#" @click="handleToggleSearch()">
                        <span v-if="isSearchEnable" class="las la-angle-down search-toggle-card"></span>
                        <span v-else class="las la-angle-up search-toggle-card"></span>
                    </a>
                </div>
            </div>

            <form class="uk-form-stacked uk-margin-top uk-grid-small" @submit.prevent="false" v-if="isSearchEnable === true">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">No. Rekam Medis</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.medical_number" placeholder="Cari berdasarkan nomor rekam medis" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">Nomor Registrasi</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.register_number" placeholder="Cari berdasarkan nomor registrasi" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">Nama Pasien</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.patient_name" placeholder="Cari berdasarkan nama pasien" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label for="input-tanggal-lahir" class="uk-form-label form-label">Tanggal Lahir</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-tanggal-lahir" v-model="searchField.tanggal_lahir" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label for="input-tanggal-pengambilan" class="uk-form-label form-label">Tanggal Pengambilan</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-tanggal-pengambilan" v-model="searchField.tanggal_pickup" />
                        </div>
                    </div>
                </div>

                <div class="uk-margin">
                    <button @click="handleSearch()" class="uk-button uk-button-primary button button-primary">Cari</button>
                    <button @click="handleResetSearch()" class="uk-margin-small-left uk-button uk-button-default button button-default">Reset</button>
                </div>
            </form>
        </div>

        <div class="uk-card uk-card-default card-body">
            <div class="uk-overflow-auto uk-margin">
                <table class="uk-table uk-table-divider uk-table-striped uk-table-small uk-table-responsive uk-table-middle table">
                    <thead>
                        <tr>
                            <th>Aksi</th>
                            <th>No. Registrasi</th>
                            <th>No. RM</th>
                            <th>Nama Pasien</th>
                            <th>Tanggal Lahir</th>
                            <th>Umur</th>
                            <th>Jenis Kelamin</th>
                            <th>Nomor Telepon</th>
                            <th>Tanggal Pengambilan</th>
                            <th>Tanggal Pembuatan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataPatientVisitor.data" :key="data.register_number">
                            <td>
                                <button class="uk-button uk-button-primary uk-button-small button button-primary">
                                    <span class="las la-ellipsis-v"></span>
                                </button>
                                <div uk-dropdown class="table-dropdown-nav">
                                    <ul class="uk-nav uk-dropdown-nav dropdown-nav">
                                        <li>
                                            <router-link :to="{name: 'visitor-detail', params: { registerNumber: data.register_number }}">
                                                <span class="las la-eye"></span> Lihat
                                            </router-link>
                                        </li>
                                        <li v-if="getPermission.delete">
                                            <a @click="handleDeleteButton(data.id, data.register_number)">
                                                <span class="las la-trash"></span> Hapus
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>{{ data.register_number }}</td>
                            <td>{{ data.patient.medical_number }}</td>
                            <td>{{ data.patient.fullname }}</td>
                            <td>{{ dayjs(data.patient.dob).format('DD MMMM YYYY') }}</td>
                            <td>{{ data.patient.age }} tahun</td>
                            <td>{{ data.patient.gender.name }}</td>
                            <td>{{ data.patient.phone_number }}</td>
                            <td>{{ dayjs(data.pickup_datetime).format('DD MMMM YYYY HH:mm') }}</td>
                            <td>{{ dayjs(data.created_at).format('DD MMMM YYYY HH:mm') }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="uk-flex uk-flex-center">
                <ul class="uk-pagination nav-pagination">
                    <li :class="{
                            'disabled': dataPatientVisitor.pagination.prev_page === null
                        }">
                        <a @click="handlePageChange(dataPatientVisitor.pagination.prev_page)">
                            <span class="las la-arrow-left"></span> Previous Page
                        </a>
                    </li>
                    <li class="uk-disabled">
                        <span>Page {{ dataPatientVisitor.pagination.current_page  }} of {{ dataPatientVisitor.pagination.last }}</span>
                    </li>
                    <li :class="{
                            'disabled': dataPatientVisitor.pagination.next_page === null
                        }">
                        <a @click="handlePageChange(dataPatientVisitor.pagination.next_page)">
                            Next Page <span class="las la-arrow-right"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
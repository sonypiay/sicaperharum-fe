<script setup>

import {nextTick, onBeforeMount, onMounted, reactive, ref, watch} from "vue";
import dayjs from "dayjs";
import {toastFailed} from "../../utils/alerts.js";
import patientMedicalRecordAPI from "../../utils/api/Patient/PatientMedicalRecordAPI.js";
import {datePicker} from "../../utils/datePickerUtil.js";
import klasterAPI from "../../utils/api/MasterData/KlasterAPI.js";
import spesimenAPI from "../../utils/api/MasterData/SpesimenAPI.js";

const searchField = reactive({
    register_number: '',
    medical_number: '',
    klaster: '',
    spesimen: '',
    tanggal_start_pickup: '',
    tanggal_end_pickup: '',
    page: 1,
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
let instanceFlatpickr = null;

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

function onHandleRenderPickupDate() {
    const option = {
        dateFormat: "Y-m-d",
        altFormat: "F j, Y",
        altInput: true,
        enableTime: false,
        maxDate: "today",
        mode: 'range',
        onChange: function(selectedDates, dateStr, instance) {
            const date1 = selectedDates[0] ? dayjs(selectedDates[0]).format('YYYY-MM-DD') : '';
            const date2 = selectedDates[1] ? dayjs(selectedDates[1]).format('YYYY-MM-DD') : '';

            searchField.tanggal_start_pickup = date1;
            searchField.tanggal_end_pickup = date2;
        }
    };

    if( instanceFlatpickr !== null ) {
        instanceFlatpickr.destroy();
    }

    instanceFlatpickr = datePicker("#input-tanggal-pengambilan", option);
}

async function handleResetSearch() {
    searchField.register_number = '';
    searchField.medical_number = '';
    searchField.klaster = '';
    searchField.spesimen = '';
    searchField.tanggal_start_pickup = '';
    searchField.tanggal_end_pickup = '';
    searchField.page = 1;

    if( instanceFlatpickr ) {
        instanceFlatpickr.clear();
    }

    await fetchPatientVisitor();
}

async function handleSearch() {
    await fetchPatientVisitor();
}

async function handlePageChange(page) {
    await fetchPatientVisitor(page);
}

onMounted(async () => {
    if( isSearchEnable.value === true ) {
        onHandleRenderPickupDate();
    }

    await fetchPatientVisitor();
    await fetchDataKlaster();
    await fetchDataSpesimen();
});

watch(isSearchEnable, async (newVal) => {
    if( newVal === true ) {
        await nextTick();
        onHandleRenderPickupDate();
    } else {
        if( instanceFlatpickr ) { instanceFlatpickr.destroy(); }
    }
});

</script>

<template>
    <section class="card-section">
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-expand">
                <div class="card-heading">Daftar Kunjungan Pasien</div>
            </div>
            <div class="uk-width-1-5@m">
                <div class="uk-flex uk-flex-right">
                    <router-link :to="{name: 'form-register-patient'}" class="uk-button uk-button-primary button button-primary">
                        Tambah
                    </router-link>
                </div>
            </div>
        </div>

        <div class="uk-card uk-card-default card-body">
            <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-6">
                    <div class="card-subheading">
                        <span class="las la-search"></span> Cari
                    </div>
                </div>
                <div class="uk-width-expand">
                    <div class="uk-text-right">
                        <a href="#" @click="handleToggleSearch()">
                            <span v-if="isSearchEnable" class="las la-angle-down search-toggle-card"></span>
                            <span v-else class="las la-angle-up search-toggle-card"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="uk-width-1-3" v-if="isSearchEnable === true">
                <form class="uk-form-stacked uk-margin-top" @submit.prevent="false">
                    <div class="uk-margin">
                        <label class="uk-form-label form-label">No. Rekam Medis</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.medical_number" placeholder="Cari berdasarkan nomor rekam medis" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label form-label">Nomor Registrasi</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.register_number" placeholder="Cari berdasarkan nomor registrasi" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label form-label">Klaster</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1 uk-select form-select" v-model="searchField.klaster" aria-label="Select">
                                <option value="" selected>Pilih Klaster</option>
                                <option v-for="item in dataKlaster" :key="item.id" :value="item.id">{{ item.title }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label form-label">Jenis Spesimen</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1 uk-select form-select" v-model="searchField.spesimen" aria-label="Select">
                                <option value="" selected>Pilih Spesimen</option>
                                <option v-for="item in dataSpesimen" :key="item.id" :value="item.id">{{ item.title }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label for="input-tanggal-pengambilan" class="uk-form-label form-label">Tanggal Pengambilan</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-tanggal-pengambilan" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <button @click="handleSearch()" class="uk-margin-small-right uk-button uk-button-primary button button-primary">Cari</button>
                        <button @click="handleResetSearch()" class="uk-button uk-button-default button button-default">Reset</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="uk-card uk-card-default card-body">
            <table class="uk-table uk-table-divider uk-table-striped uk-table-small uk-table-responsive table">
                <thead>
                <tr>
                    <th>Aksi</th>
                    <th>No. Registrasi</th>
                    <th>Klaster</th>
                    <th>Spesimen</th>
                    <th>No. RM</th>
                    <th>Nama Pasien</th>
                    <th>Tanggal Lahir</th>
                    <th>Umur</th>
                    <th>Jenis Kelamin</th>
                    <th>Nomor Telepon</th>
                    <th>Tanggal Pengambilan</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in dataPatientVisitor.data" :key="data.register_number">
                    <td>
                        <router-link :to="{name: 'visitor-detail', params: { registerNumber: data.register_number }}" class="uk-button uk-button-small uk-button-primary button button-primary">
                            <span class="las la-eye"></span> Lihat
                        </router-link>
                    </td>
                    <td>{{ data.register_number }}</td>
                    <td>{{ data.klaster.title }}</td>
                    <td>{{ data.spesimen.title }}</td>
                    <td>{{ data.patient.medical_number }}</td>
                    <td>{{ data.patient.fullname }}</td>
                    <td>{{ dayjs(data.patient.dob).format('DD MMMM YYYY') }}</td>
                    <td>{{ data.patient.age }} tahun</td>
                    <td>{{ data.patient.gender.label }}</td>
                    <td>{{ data.patient.phone_number }}</td>
                    <td>{{ dayjs(data.pickup_datetime).format('DD MMMM YYYY HH:mm') }}</td>
                </tr>
                </tbody>
            </table>

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
<script setup>

import {nextTick, onMounted, reactive, ref, watch} from "vue";
import patientAPI from "../../utils/api/Patient/PatientAPI.js";
import dayjs from "dayjs";
import {alertConfirm, toastFailed, toastSuccess} from "../../utils/alerts.js";
import {datePicker} from "../../utils/datePickerUtil.js";

const searchField = reactive({
    medical_number: '',
    name: '',
    phone_number: '',
    gender: '',
    page: 1,
    dob: '',
});

const dataPatient = reactive({
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
const isSearchEnable = ref(false);
let instanceDobPicker = null;

async function fetchPatient(page) {
    const fetchApi = await patientAPI.getAll(searchField, page);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataPatient.data = responseBody.data;
        dataPatient.pagination = responseBody.pagination;
    } else {
        toastFailed(responseBody.message);
    }
}

function handleToggleSearch() {
    isSearchEnable.value = !isSearchEnable.value;
}

async function handleSearch() {
    await fetchPatient();
}

async function handlePageChange(page) {
    await fetchPatient(page);
}

async function handleResetSearch() {
    searchField.register_number = '';
    searchField.name = '';
    searchField.gender = '';
    searchField.dob = '';
    searchField.phone_number = '';
    searchField.page = 1;

    if( instanceDobPicker ) {
        instanceDobPicker.clear();
    }

    await fetchPatient();
}

function onHandleRenderDatePicker() {
    const options = {
        dob: {
            dateFormat: "Y-m-d",
            altFormat: "F j, Y",
            altInput: true,
            enableTime: false,
            maxDate: "today",
        }
    };

    if( instanceDobPicker !== null ) {
        instanceDobPicker.destroy();
    }

    instanceDobPicker = datePicker("#input-dob", options.dob);
}

async function handleDeleteButton(medicalNumber) {
    const confirmDelete = await alertConfirm("Konfirmasi", `Apakah anda yakin ingin menghapus data pasien ${medicalNumber}?`);

    if( confirmDelete === true ) {
        const response = await patientAPI.delete(medicalNumber);
        const statusCode = response.statusCode;

        if( statusCode === 202 ) {
            toastSuccess(`Data pasien ${medicalNumber} berhasil dihapus`);
            searchField.page = 1;
            await fetchPatient();
        } else {
            toastFailed(response.data.message);
        }
    }
}

onMounted(async () => {
    await fetchPatient();

    if( isSearchEnable.value === true ) {
        onHandleRenderDatePicker();
    }
});

watch(isSearchEnable, async (newVal) => {
    if( newVal === true ) {
        await nextTick();
        onHandleRenderDatePicker();
    } else {
        if( instanceDobPicker ) { instanceDobPicker.destroy(); }
    }
});

</script>

<template>
    <section class="card-section">
        <div class="uk-flex uk-flex-between">
            <div class="card-heading">Daftar Pasien</div>
            <div class="uk-text-right">
                <router-link :to="{name: 'create-patient'}" class="uk-button uk-button-primary button button-primary">
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

            <form class="uk-form-stacked uk-margin-top" @submit.prevent="false" v-if="isSearchEnable === true">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">No. Rekam Medis</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.medical_number" placeholder="Cari berdasarkan nomor rekam medis" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">Nama</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.name" placeholder="Cari berdasarkan nama" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">No. Telepon</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.phone_number" placeholder="Cari berdasarkan nomor telepon" />
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label class="uk-form-label form-label">Jenis Kelamin</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1 uk-select form-select" v-model="searchField.gender">
                                <option value="">Pilih</option>
                                <option value="L">Laki - Laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label for="input-dob" class="uk-form-label form-label">Tanggal Lahir</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-dob" v-model="searchField.dob" />
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
            <table class="uk-table uk-table-divider uk-table-striped uk-table-small uk-table-responsive uk-table-justify uk-table-middle table">
                <thead>
                    <tr>
                        <th>Aksi</th>
                        <th>No. Rekam Medis</th>
                        <th>Nama</th>
                        <th>Tanggal Lahir</th>
                        <th>Jenis Kelamin</th>
                        <th>No. Telepon</th>
                        <th>Terakhir diubah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in dataPatient.data" :key="data.id">
                        <td>
                            <button class="uk-button uk-button-primary uk-button-small button button-primary">
                                <span class="las la-ellipsis-v"></span>
                            </button>

                            <div uk-dropdown class="table-dropdown-nav">
                                <ul class="uk-nav uk-dropdown-nav dropdown-nav">
                                    <li>
                                        <router-link :to="{name: 'edit-patient', params: { id: data.id }}">
                                            <span class="las la-edit"></span> Ubah
                                        </router-link>
                                    </li>
                                    <li>
                                        <a @click="handleDeleteButton(data.medical_number)">
                                            <span class="las la-trash"></span> Hapus
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                        <td>{{ data.medical_number }}</td>
                        <td>{{ data.fullname }}</td>
                        <td>{{ dayjs(data.dob).format('DD MMMM YYYY') }}</td>
                        <td>{{ data.gender.name }}</td>
                        <td>{{ data.phone_number }}</td>
                        <td>
                            {{ dayjs(data.updated_at).format('DD MMMM YYYY HH:mm') }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="uk-flex uk-flex-center">
                <ul class="uk-pagination nav-pagination">
                    <li :class="{
                            'disabled': dataPatient.pagination.prev_page === null
                        }">
                        <a @click="handlePageChange(dataPatient.pagination.prev_page)">
                            <span class="las la-arrow-left"></span> Previous Page
                        </a>
                    </li>
                    <li class="uk-disabled">
                        <span>Page {{ dataPatient.pagination.current_page  }} of {{ dataPatient.pagination.last }}</span>
                    </li>
                    <li :class="{
                            'disabled': dataPatient.pagination.next_page === null
                        }">
                        <a @click="handlePageChange(dataPatient.pagination.next_page)">
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
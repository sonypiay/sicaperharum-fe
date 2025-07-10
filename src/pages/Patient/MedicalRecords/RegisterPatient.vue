<script setup>
import {onMounted, reactive, ref} from 'vue';
import {toastFailed} from "../../../utils/alerts.js";
import {useRouter} from "vue-router";
import patientAPI from "../../../utils/api/Patient/PatientAPI.js";
import {datePicker} from "../../../utils/datePickerUtil.js";
import klasterAPI from "../../../utils/api/MasterData/KlasterAPI.js";
import spesimenAPI from "../../../utils/api/MasterData/SpesimenAPI.js";
import {useSessionStorage} from "@vueuse/core";
import metodePembayaranAPI from "../../../utils/api/MasterData/MetodePembayaranAPI.js";
import patientMedicalRecordAPI from "../../../utils/api/Patient/PatientMedicalRecordAPI.js";
import dayjs from "dayjs";
import Multiselect  from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

const formsInput = reactive({
    register_number: '',
    medical_number: '',
    fullname: '',
    address: '',
    dob: '',
    gender: 'L',
    phone_number: '',
    klaster: {
        value: '',
        label: '',
    },
    spesimen: [],
    pickup_datetime: '',
    metode_pembayaran: [],
    age: 0,
    patientType: 'child',
});

const router = useRouter();
const errorDetail = reactive({});

const dataPatient = ref([]);
const dataKlaster = ref([]);
const dataSpesimen = ref([])
const dataMetodePembayaran = ref([]);
const isFindPatient = ref(false);
const isFetchDataPatient = ref(false);
const formPatient = useSessionStorage("form-patient", "");

function onValidationForm() {
    errorDetail.medical_number = '';
    errorDetail.fullname = '';
    errorDetail.address = '';
    errorDetail.dob = '';
    errorDetail.klaster = '';
    errorDetail.spesimen = '';
    errorDetail.pickup_datetime = '';
    errorDetail.metode_pembayaran = '';
    errorDetail.phone_number = '';
    errorDetail.isError = false;

    if( formsInput.fullname === '' ) {
        errorDetail.fullname = 'Nama wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.medical_number === '' ) {
        errorDetail.medical_number = 'Nomor rekam medis wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.address === '' ) {
        errorDetail.address = 'Alamat wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.dob === '' ) {
        errorDetail.dob = 'Tanggal lahir wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.klaster.value === '' ) {
        errorDetail.klaster = 'Klaster wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.spesimen.length === 0 ) {
        errorDetail.spesimen = 'Spesimen wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.pickup_datetime === '' ) {
        errorDetail.pickup_datetime = 'Tanggal pengambilan wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.metode_pembayaran.length === 0 ) {
        errorDetail.metode_pembayaran = 'Metode pembayaran wajib diisi ';
        errorDetail.isError = true;
    }
}

async function fetchDataKlaster() {
    const fetchApi = await klasterAPI.getAll();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    errorDetail.klaster = '';

    if( statusCode === 200 ) {
        dataKlaster.value = responseBody.map(item => {
            return {
                id: item.id,
                title: item.title,
            }
        });
    } else {
        errorDetail.klaster = 'Gagal mengambil data klaster';
        toastFailed(fetchApi.data.message);
    }
}

async function fetchDataSpesimen() {
    const fetchApi = await spesimenAPI.getAll();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    errorDetail.spesimen = '';

    if( statusCode === 200 ) {
        dataSpesimen.value = responseBody.map(item => {
            return {
                id: item.id,
                title: item.title,
            }
        });
    } else {
        errorDetail.spesimen = 'Gagal mengambil data spesimen';
        toastFailed(fetchApi.data.message);
    }
}

async function fetchDataMetodePembayaran() {
    const fetchApi = await metodePembayaranAPI.getAll();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    errorDetail.metode_pembayaran = '';

    if( statusCode === 200 ) {
        dataMetodePembayaran.value = responseBody.map(item => {
            return {
                id: item.id,
                title: item.title,
            }
        });
    } else {
        errorDetail.metode_pembayaran = 'Gagal mengambil data metode pembayaran';
        toastFailed(fetchApi.data.message);
    }
}

async function fetchGenerateRegisterNumber() {
    const fetchApi = await patientMedicalRecordAPI.getRegisterNumber();
    const responseBody = fetchApi.data;

    formsInput.register_number = responseBody.register_number;
}

async function onHandleFindPatient(value) {
    if( value.length >= 3 ) {
        isFetchDataPatient.value = true;
        isFindPatient.value = true;

        const fetchApi = await patientAPI.findPatientByMedicalNumber(value);
        const responseBody = fetchApi.data;
        const statusCode = fetchApi.statusCode;

        if( statusCode === 200 ) {
            dataPatient.value = responseBody;
        } else {
            errorDetail.medical_number = 'Nomor rekam medis tidak ditemukan';
            isFindPatient.value = false;
        }
    } else {
        errorDetail.medical_number = '';
        dataPatient.value = [];
        isFindPatient.value = false;
    }

    isFetchDataPatient.value = false;
}

async function onHandleSelectPatient(value) {
    isFindPatient.value = false;

    errorDetail.medical_number = '';
    formsInput.medical_number = value.medical_number;
    formsInput.fullname = value.fullname;
    formsInput.address = value.address;
    formsInput.dob = value.dob;
    formsInput.gender = value.gender.value;
    formsInput.phone_number = value.phone_number ?? '';

    onHandleRenderDatePicker();
}

function onHandleRenderDatePicker() {
    const options = {
        pickupDate: {
            dateFormat: "Y-m-d H:i",
            altFormat: "F j, Y H:i",
            altInput: true,
            enableTime: true,
            time_24hr: true,
            minDate: "today",
        },
        dob: {
            dateFormat: "Y-m-d",
            altFormat: "F j, Y",
            altInput: true,
            enableTime: false,
            maxDate: "today"
        }
    };

    if( formsInput.dob !== '' ) options.dob.defaultDate = formsInput.dob;
    if( formsInput.pickup_datetime !== '' ) options.pickupDate.defaultDate = formsInput.pickup_datetime;

    datePicker("#input-tanggal-pickup", options.pickupDate);
    datePicker("#input-dob", options.dob);
}

async function onHandleSubmitForm() {
    onValidationForm();

    formsInput.age = dayjs(dayjs()).diff(formsInput.dob, 'years');
    formsInput.patientType = formsInput.age > 17 ? 'adult' : 'child';

    if( formsInput.klaster.value !== '' ) {
        const getDataKlaster = dataKlaster.value.filter(item => {
            return item.id === formsInput.klaster.value;
        });

        formsInput.klaster.label = getDataKlaster[0].title;
    }

    if( errorDetail.isError === false ) {
        formPatient.value = JSON.stringify(formsInput);
        await router.push({ name: 'form-register-medical-record' });
    }
}

function onHandleFilledForm() {
    const sessionFormPatient = sessionStorage.getItem("form-patient") ?? null;

    if( sessionFormPatient !== null && sessionFormPatient !== '' ) {
        const formPatient = JSON.parse(sessionFormPatient);
        Object.assign(formsInput, formPatient);
    }
}

onMounted(async() => {
    await fetchGenerateRegisterNumber();
    await fetchDataKlaster();
    await fetchDataSpesimen();
    await fetchDataMetodePembayaran();

    onHandleFilledForm();
    onHandleRenderDatePicker();
});
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">
            <div class="uk-flex uk-flex-between uk-flex-middle">
                <div>Pendaftaran</div>
                <div class="uk-flex-right form-sub-title">
                    <span>Step 1</span> of 2
                </div>
            </div>
        </div>

        <div class="uk-form-stacked form-section-input">
            <form @submit.prevent="onHandleSubmitForm()">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-1 uk-grid-small" uk-grid>
                        <div class="uk-width-1-3@m uk-width-1-1@s">
                            <label class="uk-form-label form-label">No. Register Lab</label>
                            <div class="uk-form-controls">
                                <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.register_number" />
                            </div>
                        </div>

                        <div class="uk-width-1-3@m uk-width-1-1@s">
                            <label class="uk-form-label form-label form-label-required">Klaster</label>
                            <div class="uk-form-controls">
                                <select class="uk-width-1-1 uk-select form-select" v-model="formsInput.klaster.value" aria-label="Select">
                                    <option value="">Pilih Klaster</option>
                                    <option v-for="item in dataKlaster" :key="item.id" :value="item.id">{{ item.title }}</option>
                                </select>
                            </div>
                            <div v-if="errorDetail.klaster !== ''" class="uk-text-danger">{{ errorDetail.klaster }}</div>
                        </div>

                        <div class="uk-width-1-3@m uk-width-1-1@s">
                            <label class="uk-form-label form-label form-label-required">Jenis Spesimen</label>
                            <div class="uk-form-controls">
                                <multiselect
                                    v-model="formsInput.spesimen"
                                    :options="dataSpesimen"
                                    :multiple="true"
                                    :clear-on-select="false"
                                    placeholder="Pilih Spesimen"
                                    track-by="id"
                                    label="title" />
                            </div>
                            <div v-if="errorDetail.spesimen !== ''" class="uk-text-danger">{{ errorDetail.spesimen }}</div>
                        </div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-medical-number" class="uk-form-label form-label form-label-required">No. Rekam Medis</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.medical_number" @keyup="onHandleFindPatient($event.target.value)" />
                        </div>

                        <!-- dropdown find patient -->
                        <div class="autocomplete-dropdown" v-if="isFindPatient">
                            <div class="uk-text-center uk-margin-top uk-margin-bottom" v-if="isFetchDataPatient">
                                <span uk-spinner></span> Searching ...
                            </div>

                            <div class="autocomplete-container" v-if="!isFetchDataPatient">
                                <ul class="autocomplete-list">
                                    <li v-for="item in dataPatient" :key="dataPatient.id" @click="onHandleSelectPatient(item)">
                                        {{ item.medical_number }} - {{ item.fullname }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- dropdown find patient -->

                        <div v-if="errorDetail.medical_number !== ''" class="uk-text-danger">{{ errorDetail.medical_number }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-nama" class="uk-form-label form-label form-label-required">Nama</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.fullname"/>
                        </div>

                        <div v-if="errorDetail.fullname !== ''" class="uk-text-danger">{{ errorDetail.fullname }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-dob" class="uk-form-label form-label form-label-required">Tanggal Lahir</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-dob" v-model="formsInput.dob"/>
                        </div>

                        <div v-if="errorDetail.dob !== ''" class="uk-text-danger">{{ errorDetail.dob }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-active" class="uk-form-label form-label form-label-required">Jenis Kelamin</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1 uk-select form-select" v-model="formsInput.gender" aria-label="Select">
                                <option value="L">Laki - Laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-address" class="uk-form-label form-label form-label-required">Alamat</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.address" />
                        </div>

                        <div v-if="errorDetail.address !== ''" class="uk-text-danger">{{ errorDetail.address }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-telepon" class="uk-form-label form-label">Nomor Telepon</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.phone_number" maxlength="15" />
                        </div>

                        <div v-if="errorDetail.phone_number !== ''" class="uk-text-danger">{{ errorDetail.phone_number }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label for="input-tanggal-pickup" class="uk-form-label form-label form-label-required">Tanggal Pengambilan &amp; Jam</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-tanggal-pickup" v-model="formsInput.pickup_datetime" />
                        </div>

                        <div v-if="errorDetail.pickup_datetime !== ''" class="uk-text-danger">{{ errorDetail.pickup_datetime }}</div>
                    </div>

                    <div class="uk-width-1-2@m uk-width-1-1@s">
                        <label class="uk-form-label form-label form-label-required">Metode Pembayaran</label>
                        <div class="uk-form-controls">
                            <multiselect
                                v-model="formsInput.metode_pembayaran"
                                :options="dataMetodePembayaran"
                                :multiple="true"
                                :clear-on-select="false"
                                placeholder="Pilih Metode Pembayaran"
                                track-by="id"
                                label="title" />
                        </div>
                        <div v-if="errorDetail.metode_pembayaran !== ''" class="uk-text-danger">{{ errorDetail.metode_pembayaran }}</div>
                    </div>
                </div>

                <div class="uk-margin">
                    <router-link :to="{name: 'list-visitor-patient'}" class="uk-button uk-button-default button button-default">
                        Kembali
                    </router-link>
                    <button class="uk-margin-small-left uk-button uk-button-primary button button-primary">
                        Selanjutnya
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
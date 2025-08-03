<script setup>

import {useSessionStorage} from "@vueuse/core";
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import FormHematologi from "./FormHematologi.vue";
import FormKimiaKlinik from "./FormKimiaKlinik.vue";
import FormUrinalisa from "./FormUrinalisa.vue";
import FormImunoserologi from "./FormImunoserologi.vue";
import FormMikroskopis from "./FormMikroskopis.vue";
import FormTCM from "./FormTCM.vue";
import FormLainnya from "./FormLainnya.vue";
import dayjs from "dayjs";
import mappingMedicalRecord from "../../../utils/mappingMedicalRecord.js";
import FormNapza from "./FormNapza.vue";
import patientMedicalRecordAPI from "../../../utils/api/Patient/PatientMedicalRecordAPI.js";
import {alertConfirm, toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRoute, useRouter} from "vue-router";
import CheckPermissionAccess from "../../../utils/CheckPermissionAccess.js";

const router = useRouter();
const route = useRoute();
const inputMedicalRecordsData = reactive({
    hematologi: mappingMedicalRecord.hematologi,
    kimia_klinik: mappingMedicalRecord.kimia_klinik,
    urinalisa: mappingMedicalRecord.urinalisa,
    napza: mappingMedicalRecord.napza,
    imunoserologi: mappingMedicalRecord.imunoserologi,
    mikroskopis: mappingMedicalRecord.mikroskopis,
    tcm: mappingMedicalRecord.tcm,
    lainnya: mappingMedicalRecord.lainnya,
});

const navTabList = reactive({
    list: [
        {
            title: 'Hematologi',
            value: 'hematologi',
            active: true
        },
        {
            title: 'Kimia Klinik',
            value: 'kimia_klinik',
            active: false
        },
        {
            title: 'Urinalisa',
            value: 'urinalisa',
            active: false
        },
        {
            title: 'Napza',
            value: 'napza',
            active: false
        },
        {
            title: 'Imunoserologi',
            value: 'imunoserologi',
            active: false
        },
        {
            title: 'Mikroskopis',
            value: 'mikroskopis',
            active: false
        },
        {
            title: 'TCM',
            value: 'tcm',
            active: false
        },
        {
            title: 'Lainnya',
            value: 'lainnya',
            active: false
        },
    ],
});

const currentNavTab = ref('hematologi');
const formsInput = ref({});
const isShowMenuDropdownTab = ref(false);

function onHandleTabClick(value) {
    navTabList.list.forEach((tab) => {
        tab.active = value === tab.value;
    });

    currentNavTab.value = value;
    isShowMenuDropdownTab.value = false;
}

function onHandleMappingFormMedicalRecord(data) {
    const filteredData = data.filter((item) => {
        return item.hasil !== '' && item.hasil !== null;
    }).map((item) => {
        return {
            label: item.label,
            hasil: item.hasil,
            satuan: item.satuan ?? null,
            nilai_normal: item.nilai_normal ?? null,
            note: item.note ?? null,
            titer: item.titer ?? null,
        };
    });

    return filteredData.length > 0 ? filteredData : null;
}

async function onHandleSubmitForm() {
    const confirmForm = await alertConfirm("Konfirmasi", "Apakah anda yakin ingin menyimpan hasil lab ini?");

    if(confirmForm !== true) {
        return false;
    }

    const formPatient = JSON.parse(useSessionStorage('form-patient').value ?? "{}");
    formPatient.klaster = formPatient.klaster.value;

    const mappingHematologi = {
        hematologi_rutin: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.hematologi.hematologi_rutin),
        index_eritrosit: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.hematologi.index_eritrosit),
        laju_endap_darah: inputMedicalRecordsData.hematologi.laju_endap_darah,
        jenis_leukosit: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.hematologi.jenis_leukosit),
    };

    const mappingKimiaKlinik = {
        diabetes: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.kimia_klinik.diabetes),
        lipid: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.kimia_klinik.lipid),
        fungsi_ginjal: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.kimia_klinik.fungsi_ginjal),
        fungsi_hati: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.kimia_klinik.fungsi_hati),
    };

    const mappingUrinalisa = {
        makroskopis_kimia: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.urinalisa.makroskopis_kimia),
        sedimen: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.urinalisa.sedimen),
    };

    const mappingNapza = onHandleMappingFormMedicalRecord(inputMedicalRecordsData.napza);
    const mappingImunoserologi = {
        hiv: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.imunoserologi.hiv),
        widal: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.imunoserologi.widal),
        sifilis: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.imunoserologi.sifilis),
        hepatitis: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.imunoserologi.hepatitis),
        golongan_darah: inputMedicalRecordsData.imunoserologi.golongan_darah,
        rhesus: inputMedicalRecordsData.imunoserologi.rhesus,
    };

    const mappingMikroskopis = {
        makroskopis: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.mikroskopis.makroskopis),
        mikroskopis: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.mikroskopis.mikroskopis),
        ims: {
            laki: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.mikroskopis.ims.laki),
            perempuan: onHandleMappingFormMedicalRecord(inputMedicalRecordsData.mikroskopis.ims.perempuan)
        },
        bta: inputMedicalRecordsData.mikroskopis.bta,
    };

    const mappingTCM = onHandleMappingFormMedicalRecord(inputMedicalRecordsData.tcm);
    const mappingLainnya = onHandleMappingFormMedicalRecord(inputMedicalRecordsData.lainnya);

    formsInput.value = {
        medical_result: {
            hematologi: mappingHematologi,
            kimia_klinik: mappingKimiaKlinik,
            urinalisa: mappingUrinalisa,
            napza: mappingNapza,
            imunoserologi: mappingImunoserologi,
            mikroskopis: mappingMikroskopis,
            tcm: mappingTCM,
            lainnya: mappingLainnya,
        },
        ...formPatient,
    };

    const fetchApi = await patientMedicalRecordAPI.create(formsInput.value);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 201 ) {
        const medical_records = responseBody.medical_records;
        toastSuccess(`Hasil lab untuk pasien dengan nomor rekam medis ${formPatient.medical_number} berhasil dibuat.`);

        // reset form
        Object.assign(inputMedicalRecordsData.hematologi, {});
        Object.assign(inputMedicalRecordsData.kimia_klinik, {});
        Object.assign(inputMedicalRecordsData.urinalisa, {});
        Object.assign(inputMedicalRecordsData.napza, {});
        Object.assign(inputMedicalRecordsData.imunoserologi, {});
        Object.assign(inputMedicalRecordsData.mikroskopis, {});
        Object.assign(inputMedicalRecordsData.tcm, {});
        Object.assign(inputMedicalRecordsData.lainnya, {});
        sessionStorage.removeItem('form-patient');

        window.open(patientMedicalRecordAPI.urlReadPdf(medical_records.register_number_id), '_blank');
        setTimeout(() => {
            window.location = `${route.path}/${medical_records.register_number_id}`;
        }, 500);
        // await router.push({name: 'visitor-detail', params: {registerNumber: medical_records.register_number_id}});
    } else {
        toastFailed(responseBody.message);
    }
}

function onHandleDetectScrolling() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navTabStickyWeb = document.querySelector('.nav-tab-sticky-web');
    const navTabStickyMobile = document.querySelector('.nav-tab-sticky-mobile');

    if( scrollTop > 200 ) {
        navTabStickyWeb.classList.add('sticky-position');
        navTabStickyMobile.classList.add('sticky-position');
    } else {
        navTabStickyWeb.classList.remove('sticky-position');
        navTabStickyMobile.classList.remove('sticky-position');
    }
}

function onHandleToggleMenuDropdownTab()
{
    isShowMenuDropdownTab.value = !isShowMenuDropdownTab.value;
}

async function handleGetPermission() {
    const roles = route.meta.roles;
    if( CheckPermissionAccess('write', roles) === false ) {
        toastFailed('Anda tidak memiliki akses untuk mengakses halaman ini');
        await router.push({ name: 'list-visitor-patient'});
    }
}

const dataPatient = ref({});

onBeforeMount(async () => {
    await handleGetPermission();
});

onMounted(async () => {
    dataPatient.value = JSON.parse(useSessionStorage('form-patient').value ?? "{}");
    window.addEventListener('scroll', onHandleDetectScrolling);
});
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">
            <div class="uk-flex uk-flex-between uk-flex-middle">
                <div>Hasil Lab</div>
                <div class="uk-flex-right form-sub-title">
                    <span>Step 2</span> of 2
                </div>
            </div>
        </div>

        <div class="nav-tab-sticky-web uk-visible@m">
            <nav class="form-nav-tab uk-flex uk-flex-center uk-visible@m">
                <a v-for="tab in navTabList.list" href="#form-medical-record" class="uk-width-1-2@l uk-width-1-1@m nav-btn" :key="tab.title" :class="{ 'nav-btn-active': tab.active }" @click="onHandleTabClick(tab.value)">
                    {{ tab.title }}
                </a>
            </nav>
        </div>

        <div class="nav-tab-sticky-mobile uk-hidden@m">
            <nav class="form-nav-tab-dropdown uk-position-z-index-high">
                <a class="uk-width-1-1 uk-display-block nav-btn" @click="onHandleToggleMenuDropdownTab()">
                    <span class="las la-bars"></span> Menu
                </a>
                <div v-if="isShowMenuDropdownTab" class="uk-width-1-1 form-tab-dropdown-container">
                    <a v-for="tab in navTabList.list" href="#form-medical-record" class="uk-width-1-1 uk-display-block nav-btn" :key="tab.title" :class="{ 'nav-btn-active': tab.active }" @click="onHandleTabClick(tab.value)">
                        {{ tab.title }}
                    </a>
                </div>
            </nav>
        </div>

        <div class="uk-form-stacked form-section-input">
            <table class="uk-table uk-table-divider uk-table-small uk-table-responsive uk-table-middle uk-table-justify table">
                <tbody>
                    <tr>
                        <th>No. Rekam Medis</th>
                        <td>{{ dataPatient.medical_number }}</td>
                    </tr>
                    <tr>
                        <th>Nama Pasien</th>
                        <td>{{ dataPatient.fullname }}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Lahir</th>
                        <td>{{ dayjs(dataPatient.dob).format('DD MMMM YYYY') }}</td>
                    </tr>
                    <tr>
                        <th>Jenis Kelamin</th>
                        <td>{{ dataPatient.gender === 'L' ? 'Laki - Laki' : 'Perempuan' }}</td>
                    </tr>
                    <tr>
                        <th>Kategori Pasien</th>
                        <td>{{ dataPatient.patientType === 'adult' ? 'Dewasa' : 'Anak - anak' }}</td>
                    </tr>
                    <tr v-if="dataPatient.klaster">
                        <th>Klaster</th>
                        <td>{{ dataPatient.klaster.label }}</td>
                    </tr>
                    <tr v-if="dataPatient.spesimen">
                        <th>Jenis Spesimen</th>
                        <td>
                            <span v-if="dataPatient.spesimen.length > 0">
                                {{ dataPatient.spesimen.map(item => item.title).join(', ') }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Tanggal Pemeriksaan</th>
                        <td>{{ dayjs(dataPatient.pickup_datetime).format('DD MMMM YYYY HH:mm') }}</td>
                    </tr>
                    <tr v-if="dataPatient.metode_pembayaran">
                        <th>Metode Pembayaran</th>
                        <td>
                            <span v-if="dataPatient.metode_pembayaran.length > 0">
                                {{ dataPatient.metode_pembayaran.map(item => item.title).join(', ') }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <form class="uk-form-stacked" id="form-medical-record" @submit.prevent="false">
                <div class="uk-text-center">
                    <router-link :to="{name: 'form-register-patient'}" class="uk-button uk-button-default button button-default">
                        Kembali
                    </router-link>
                    <button @click="onHandleSubmitForm()" class="uk-margin-small-left uk-button uk-button-primary button button-primary">Submit</button>
                </div>

                <FormHematologi v-if="currentNavTab === 'hematologi'" :form-data-patient="dataPatient" :formInput="inputMedicalRecordsData.hematologi" />
                <FormKimiaKlinik v-if="currentNavTab === 'kimia_klinik'" :form-data-patient="dataPatient" :formInput="inputMedicalRecordsData.kimia_klinik" />
                <FormUrinalisa v-if="currentNavTab === 'urinalisa'" :formInput="inputMedicalRecordsData.urinalisa" />
                <FormNapza v-if="currentNavTab === 'napza'" :formInput="inputMedicalRecordsData.napza" />
                <FormImunoserologi v-if="currentNavTab === 'imunoserologi'" :formInput="inputMedicalRecordsData.imunoserologi" />
                <FormMikroskopis v-if="currentNavTab === 'mikroskopis'" :form-data-patient="dataPatient" :formInput="inputMedicalRecordsData.mikroskopis" />
                <FormTCM v-if="currentNavTab === 'tcm'" :formInput="inputMedicalRecordsData.tcm" />
                <FormLainnya v-if="currentNavTab === 'lainnya'" :formInput="inputMedicalRecordsData.lainnya" />

                <div class="uk-margin-top uk-text-center">
                    <router-link :to="{name: 'form-register-patient'}" class="uk-button uk-button-default button button-default">
                        Kembali
                    </router-link>
                    <button @click="onHandleSubmitForm()" class="uk-margin-small-left uk-button uk-button-primary button button-primary">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
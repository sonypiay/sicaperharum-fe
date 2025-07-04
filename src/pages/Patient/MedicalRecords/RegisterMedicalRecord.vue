<script setup>

import {useSessionStorage} from "@vueuse/core";
import {onMounted, reactive, ref} from "vue";
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
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import router from "../../../router/index.js";

const formInputHematologi = reactive(mappingMedicalRecord.hematologi);
const formInputKimiaKlinik = reactive(mappingMedicalRecord.kimiaKlinik);
const formInputUrinalisa = reactive(mappingMedicalRecord.urinalisa);
const formInputNapza = reactive(mappingMedicalRecord.napza);
const formInputImunoserologi = reactive(mappingMedicalRecord.imunoserologi);
const formInputMikroskopis = reactive(mappingMedicalRecord.mikroskopis);
const formInputTcm = reactive(mappingMedicalRecord.tcm);
const formInputLainnya = reactive(mappingMedicalRecord.lainnya);

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

function onHandleTabClick(value) {
    navTabList.list.forEach((tab) => {
        tab.active = value === tab.value;
    });

    currentNavTab.value = value;
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
        };
    });

    return filteredData.length > 0 ? filteredData : null;
}

async function onHandleSubmitForm() {
    const formPatient = JSON.parse(useSessionStorage('form-patient').value ?? "{}");
    formPatient.klaster = formPatient.klaster.value;
    formPatient.spesimen = formPatient.spesimen.value;
    formPatient.metode_pembayaran = formPatient.metode_pembayaran.label;

    const mappingHematologi = {
        hematologi_rutin: onHandleMappingFormMedicalRecord(formInputHematologi.hematologiRutin),
        index_eritrosit: onHandleMappingFormMedicalRecord(formInputHematologi.indexEritrosit),
        laju_endap_darah: formInputHematologi.lajuEndapDarah.hasil ?? null,
        jenis_leukosit: onHandleMappingFormMedicalRecord(formInputHematologi.jenisLeukosit),
    };

    const mappingKimiaKlinik = {
        diabetes: onHandleMappingFormMedicalRecord(formInputKimiaKlinik.diabetes),
        lipid: onHandleMappingFormMedicalRecord(formInputKimiaKlinik.lipid),
        fungsi_ginjal: onHandleMappingFormMedicalRecord(formInputKimiaKlinik.fungsiGinjal),
        fungsi_hati: onHandleMappingFormMedicalRecord(formInputKimiaKlinik.fungsiHati),
    };

    const mappingUrinalisa = {
        makroskopis_kimia: onHandleMappingFormMedicalRecord(formInputUrinalisa.makroskopis_kimia),
        sedimen: onHandleMappingFormMedicalRecord(formInputUrinalisa.sedimen),
    };

    const mappingNapza = onHandleMappingFormMedicalRecord(formInputNapza);
    const mappingImunoserologi = {
        hiv: onHandleMappingFormMedicalRecord(formInputImunoserologi.hiv),
        widal: onHandleMappingFormMedicalRecord(formInputImunoserologi.widal),
        golongan_darah: formInputImunoserologi.golonganDarah.hasil ?? null,
        rhesus: formInputImunoserologi.rhesus.hasil ?? null,
    };

    const mappingMikroskopis = {
        feses: formInputMikroskopis.feses ?? null,
        makroskopis: onHandleMappingFormMedicalRecord(formInputMikroskopis.makroskopis),
        mikroskopis: onHandleMappingFormMedicalRecord(formInputMikroskopis.mikroskopis),
        ims: {
            laki: onHandleMappingFormMedicalRecord(formInputMikroskopis.ims.laki),
            perempuan: onHandleMappingFormMedicalRecord(formInputMikroskopis.ims.perempuan)
        },
        bta: formInputMikroskopis.bta.hasil ?? null,
    };

    const mappingTCM = onHandleMappingFormMedicalRecord(formInputTcm);
    const mappingLainnya = onHandleMappingFormMedicalRecord(formInputLainnya);

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
        toastSuccess(`Hasil lab untuk pasien dengan nomor rekam medis ${formPatient.medical_number} berhasil dibuat.`);

        // reset form
        Object.assign(formInputHematologi, mappingMedicalRecord.hematologi);
        Object.assign(formInputKimiaKlinik, mappingMedicalRecord.kimiaKlinik);
        Object.assign(formInputUrinalisa, mappingMedicalRecord.urinalisa);
        Object.assign(formInputNapza, mappingMedicalRecord.napza);
        Object.assign(formInputImunoserologi, mappingMedicalRecord.imunoserologi);
        Object.assign(formInputMikroskopis, mappingMedicalRecord.mikroskopis);
        Object.assign(formInputTcm, mappingMedicalRecord.tcm);
        Object.assign(formInputLainnya, mappingMedicalRecord.lainnya);
        sessionStorage.removeItem('form-patient');

        await router.push({name: 'form-register-patient'});
    } else {
        toastFailed(responseBody.message);
    }
}

const dataPatient = ref({});
onMounted(() => {
    dataPatient.value = JSON.parse(useSessionStorage('form-patient').value ?? "{}");
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

        <nav class="form-nav-tab uk-flex uk-flex-center">
            <a v-for="tab in navTabList.list" class="uk-width-1-2@l uk-width-1-1@m nav-btn" :key="tab.title" :class="{ 'nav-btn-active': tab.active }" @click="onHandleTabClick(tab.value)">
                {{ tab.title }}
            </a>
        </nav>

        <div class="uk-form-stacked form-section-input">
            <table class="uk-table uk-table-divider uk-table-small table">
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
                        <td>{{ dataPatient.spesimen.label }}</td>
                    </tr>
                    <tr>
                        <th>Tanggal Pemeriksaan</th>
                        <td>{{ dayjs(dataPatient.pickup_datetime).format('DD MMMM YYYY HH:mm') }}</td>
                    </tr>
                    <tr v-if="dataPatient.metode_pembayaran">
                        <th>Metode Pembayaran</th>
                        <td>{{ dataPatient.metode_pembayaran.label.join(', ') }}</td>
                    </tr>
                </tbody>
            </table>

            <form class="uk-form-stacked" @submit.prevent="onHandleSubmitForm()">
                <FormHematologi v-if="currentNavTab === 'hematologi'" :form-data-patient="dataPatient" :formInput="formInputHematologi" />
                <FormKimiaKlinik v-if="currentNavTab === 'kimia_klinik'" :form-data-patient="dataPatient" :formInput="formInputKimiaKlinik" />
                <FormUrinalisa v-if="currentNavTab === 'urinalisa'" :form-data-patient="dataPatient" :formInput="formInputUrinalisa" />
                <FormNapza v-if="currentNavTab === 'napza'" :form-data-patient="dataPatient" :formInput="formInputNapza" />
                <FormImunoserologi v-if="currentNavTab === 'imunoserologi'" :form-data-patient="dataPatient" :formInput="formInputImunoserologi" />
                <FormMikroskopis v-if="currentNavTab === 'mikroskopis'" :form-data-patient="dataPatient" :formInput="formInputMikroskopis" />
                <FormTCM v-if="currentNavTab === 'tcm'" :form-data-patient="dataPatient" :formInput="formInputTcm" />
                <FormLainnya v-if="currentNavTab === 'lainnya'" :form-data-patient="dataPatient" :formInput="formInputLainnya" />

                <router-link :to="{name: 'form-register-patient'}">
                    Kembali
                </router-link>
                <button class="uk-button uk-button-primary button button-primary">Submit</button>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
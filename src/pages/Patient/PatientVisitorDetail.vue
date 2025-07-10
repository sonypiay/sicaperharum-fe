<script setup>

import {onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import patientMedicalRecordAPI from "../../utils/api/Patient/PatientMedicalRecordAPI.js";
import {toastFailed} from "../../utils/alerts.js";
import dayjs from "dayjs";
import TableHematologi from "./MedicalRecords/TableHematologi.vue";
import TableKimiaKlinik from "./MedicalRecords/TableKimiaKlinik.vue";
import TableUrinalisa from "./MedicalRecords/TableUrinalisa.vue";
import TableNapza from "./MedicalRecords/TableNapza.vue";
import TableImunoserologi from "./MedicalRecords/TableImunoserologi.vue";
import TableMikroskopis from "./MedicalRecords/TableMikroskopis.vue";
import TableTCM from "./MedicalRecords/TableTCM.vue";
import TableLainnya from "./MedicalRecords/TableLainnya.vue";

const router = useRouter();
const route = useRoute();
const dataPatientMedicalRecord = reactive({
    patient: {},
    klaster: {},
    spesimen: {},
    medicalResult: null,
    pickup_datetime: null,
    metode_pembayaran: [],
});
const registerNumber = route.params.registerNumber;
const isDataMedicalRecordEmpty = reactive({
    hematologi: true,
    kimia_klinik: true,
    urinalisa: true,
    napza: true,
    imunoserologi: true,
    mikroskopis: true,
    tcm: true,
    lainnya: true,
});

async function getPatientMedicalRecord() {
    const fetchApi = await patientMedicalRecordAPI.detailMedicalRecord(registerNumber);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataPatientMedicalRecord.patient = responseBody.patient;
        dataPatientMedicalRecord.klaster = responseBody.klaster;
        dataPatientMedicalRecord.spesimen = responseBody.spesimen.map(item => item.title).join(', ');
        dataPatientMedicalRecord.medicalResult = responseBody.medical_result;
        dataPatientMedicalRecord.pickup_datetime = responseBody.pickup_datetime;
        dataPatientMedicalRecord.metode_pembayaran = responseBody.metode_pembayaran.map(item => item.title).join(', ');

        checkIfMedicalResultIsEmpty(dataPatientMedicalRecord.medicalResult);
    } else {
        toastFailed(responseBody.message);
        await router.push({name: 'list-visitor-patient'});
    }
}

function checkIfMedicalResultIsEmpty(medicalResult) {
    isDataMedicalRecordEmpty.hematologi = (
        medicalResult.hematologi.hematologi_rutin === null &&
        medicalResult.hematologi.index_eritrosit === null &&
        medicalResult.hematologi.jenis_leukosit === null &&
        medicalResult.hematologi.laju_endap_darah.hasil === null
    );

    isDataMedicalRecordEmpty.kimia_klinik = (
        medicalResult.kimia_klinik.diabetes === null &&
        medicalResult.kimia_klinik.lipid === null &&
        medicalResult.kimia_klinik.fungsi_ginjal === null &&
        medicalResult.kimia_klinik.fungsi_hati === null
    );

    isDataMedicalRecordEmpty.urinalisa = (
        medicalResult.urinalisa.makroskopis_kimia === null &&
        medicalResult.urinalisa.sedimen === null
    );

    isDataMedicalRecordEmpty.napza = medicalResult.napza === null;
    isDataMedicalRecordEmpty.tcm = medicalResult.tcm === null;

    const hasPropertySifilis = Object.prototype.hasOwnProperty.call(medicalResult.imunoserologi, 'sifilis');
    const hasPropertyHepatitis = Object.prototype.hasOwnProperty.call(medicalResult.imunoserologi, 'hepatitis');

    isDataMedicalRecordEmpty.imunoserologi = (
        medicalResult.imunoserologi.golongan_darah.hasil === null &&
        medicalResult.imunoserologi.rhesus.hasil === null &&
        medicalResult.imunoserologi.hiv === null &&
        medicalResult.imunoserologi.widal === null &&
        (medicalResult.imunoserologi.sifilis === null || hasPropertySifilis === false) &&
        (medicalResult.imunoserologi.hepatitis === null || hasPropertyHepatitis === false)
    );

    isDataMedicalRecordEmpty.lainnya = medicalResult.lainnya === null;
    isDataMedicalRecordEmpty.mikroskopis = (
        medicalResult.mikroskopis.bta.hasil === null &&
        medicalResult.mikroskopis.ims.laki === null &&
        medicalResult.mikroskopis.ims.perempuan === null &&
        medicalResult.mikroskopis.makroskopis === null
    );
}

async function onHandleDownloadPDF() {
    window.open(patientMedicalRecordAPI.urlReadPdf(registerNumber), '_blank');
}

function onHandleSendWhatsApp() {
    const phoneNumber = dataPatientMedicalRecord.patient.phone_number;
    const urlPdf = patientMedicalRecordAPI.urlReadPdf(registerNumber);
    const message = `Laporan hasil lab pemeriksaan dapat di unduh dengan klik link berikut: ${urlPdf}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(url, '_blank');
}

onMounted(async () => {
    await getPatientMedicalRecord();
});
</script>

<template>
    <section class="card-section" v-if="dataPatientMedicalRecord.patient">
        <div class="card-heading">Data Hasil Pemeriksaan Pasien</div>

        <div class="uk-card uk-margin-top">
            <div class="uk-flex uk-flex-right uk-margin-bottom">
                <router-link :to="{name: 'list-visitor-patient'}" class=" uk-button uk-button-default button button-default">
                    <span class="las la-angle-left"></span> Kembali
                </router-link>
                <button @click="onHandleDownloadPDF()" class="uk-margin-small-left uk-button uk-button-primary button button-primary">Download PDF</button>
                <button v-if="dataPatientMedicalRecord.patient.phone_number" @click="onHandleSendWhatsApp()" class="uk-margin-small-left uk-button uk-button-primary button button-primary">Send WhatsApp</button>
            </div>

            <div class="uk-card uk-card-default card-information-detail">
                <div class="uk-grid-small uk-grid-divider" uk-grid>
                    <div class="uk-width-1-2@l uk-width-1-1@s">
                        <table class="uk-table uk-table-small uk-table-middle uk-table-divider uk-table-responsive uk-table-justify table">
                            <thead>
                            <tr>
                                <th>Dokter / Unit Pengirim</th>
                                <th>:</th>
                                <td>{{ dataPatientMedicalRecord.klaster.title }}</td>
                            </tr>
                            <tr>
                                <th colspan="3">Informasi Pasien</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>No. RM</th>
                                <th>:</th>
                                <td>{{ registerNumber }}</td>
                            </tr>
                            <tr>
                                <th>No. Register Lab</th>
                                <th>:</th>
                                <td>{{ dataPatientMedicalRecord.patient.medical_number }}</td>
                            </tr>
                            <tr>
                                <th>Nama</th>
                                <th>:</th>
                                <td>{{ dataPatientMedicalRecord.patient.fullname }}</td>
                            </tr>
                            <tr>
                                <th>Tanggal Lahir</th>
                                <th>:</th>
                                <td>{{ dayjs(dataPatientMedicalRecord.patient.dob).format('DD MMMM YYYY') }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="uk-width-1-2@l uk-width-1-1@s">
                        <table class="uk-table uk-table-small uk-table-middle uk-table-divider uk-table-responsive uk-table-justify table">
                            <tbody>
                            <tr>
                                <th>Umur</th>
                                <th>:</th>
                                <td>
                                    <span v-if="dataPatientMedicalRecord.patient.age">
                                        {{ dataPatientMedicalRecord.patient.age }} tahun
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="dataPatientMedicalRecord.patient.gender">
                                <th>Jenis Kelamin</th>
                                <th>:</th>
                                <td>{{ dataPatientMedicalRecord.patient.gender.name }}</td>
                            </tr>
                            <tr>
                                <th>Tanggal Pengambilan</th>
                                <th>:</th>
                                <td>
                                    <span v-if="dataPatientMedicalRecord.pickup_datetime">
                                        {{ dayjs(dataPatientMedicalRecord.pickup_datetime).format('DD MMMM YYYY') }}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Jam Pengambilan</th>
                                <th>:</th>
                                <td>
                                    <span v-if="dataPatientMedicalRecord.pickup_datetime">
                                        {{ dayjs(dataPatientMedicalRecord.pickup_datetime).format('HH:mm') }} WIB
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Jenis Spesimen</th>
                                <th>:</th>
                                <td>{{ dataPatientMedicalRecord.spesimen }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-card uk-card-default uk-margin-top card-information-detail">
            <table class="uk-table uk-table-small uk-table-middle uk-table-divider uk-table-responsive uk-table-justify table" v-if="dataPatientMedicalRecord.medicalResult">
                <thead>
                    <tr>
                        <th>Pemeriksaan</th>
                        <th>Nilai</th>
                        <th>Satuan</th>
                        <th>Nilai Normal</th>
                    </tr>
                </thead>

                <TableHematologi
                    v-if="!isDataMedicalRecordEmpty.hematologi"
                    :medical-record="dataPatientMedicalRecord.medicalResult.hematologi"
                    :data-patient="dataPatientMedicalRecord.patient"
                />

                <TableKimiaKlinik
                    v-if="!isDataMedicalRecordEmpty.kimia_klinik"
                    :medical-record="dataPatientMedicalRecord.medicalResult.kimia_klinik"
                    :data-patient="dataPatientMedicalRecord.patient"
                />

                <TableUrinalisa
                    v-if="!isDataMedicalRecordEmpty.urinalisa"
                    :medical-record="dataPatientMedicalRecord.medicalResult.urinalisa"
                />

                <TableNapza
                    v-if="!isDataMedicalRecordEmpty.napza"
                    :medical-record="dataPatientMedicalRecord.medicalResult.napza"
                />

                <TableImunoserologi
                    v-if="!isDataMedicalRecordEmpty.imunoserologi"
                    :medical-record="dataPatientMedicalRecord.medicalResult.imunoserologi"
                />

                <TableMikroskopis
                    v-if="!isDataMedicalRecordEmpty.mikroskopis"
                    :medical-record="dataPatientMedicalRecord.medicalResult.mikroskopis"
                />

                <TableTCM
                    v-if="!isDataMedicalRecordEmpty.tcm"
                    :medical-record="dataPatientMedicalRecord.medicalResult.tcm"
                />

                <TableLainnya
                    v-if="!isDataMedicalRecordEmpty.lainnya"
                    :medical-record="dataPatientMedicalRecord.medicalResult.lainnya"
                />
            </table>
        </div>
    </section>
</template>

<style scoped>

</style>
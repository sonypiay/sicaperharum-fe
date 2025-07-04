<script setup>

import {onBeforeMount, onMounted, reactive, ref} from "vue";
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

async function getPatientMedicalRecord() {
    const fetchApi = await patientMedicalRecordAPI.detailMedicalRecord(registerNumber);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataPatientMedicalRecord.patient = responseBody.patient;
        dataPatientMedicalRecord.klaster = responseBody.klaster;
        dataPatientMedicalRecord.spesimen = responseBody.spesimen;
        dataPatientMedicalRecord.medicalResult = responseBody.medical_result;
        dataPatientMedicalRecord.pickup_datetime = responseBody.pickup_datetime;
        dataPatientMedicalRecord.metode_pembayaran = responseBody.metode_pembayaran;
    } else {
        toastFailed(responseBody.message);
        await router.push({name: 'list-visitor-patient'});
    }
}

onMounted(async () => {
    await getPatientMedicalRecord();
})
</script>

<template>
    <section class="card-section" v-if="dataPatientMedicalRecord.patient">
        <div class="card-heading">Data Kunjungan Pasien</div>

        <div class="uk-card uk-margin-top">
            <div class="uk-grid-small uk-grid-divider card-information-detail" uk-grid>
                <div class="uk-width-1-2@l uk-width-1-1@s">
                    <table class="uk-table uk-table-small uk-table-middle uk-table-divider table">
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
                    <table class="uk-table uk-table-small uk-table-middle uk-table-divider table">
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
                                <td>{{ dataPatientMedicalRecord.patient.gender.label }}</td>
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
                                <td>{{ dataPatientMedicalRecord.spesimen.title }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <hr>

        <div class="uk-text-center card-heading">Data Hasil Pemeriksaan Lab</div>
        <table class="uk-table uk-table-small uk-table-divider uk-table-middle table" v-if="dataPatientMedicalRecord.medicalResult">
            <thead>
                <tr>
                    <th>Pemeriksaan</th>
                    <th>Nilai</th>
                    <th>Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>

            <TableHematologi
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('hematologi')"
                :medical-record="dataPatientMedicalRecord.medicalResult.hematologi"
                :data-patient="dataPatientMedicalRecord.patient"
            />

            <TableKimiaKlinik
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('kimia_klinik')"
                :medical-record="dataPatientMedicalRecord.medicalResult.kimia_klinik"
                :data-patient="dataPatientMedicalRecord.patient"
            />

            <TableUrinalisa
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('urinalisa')"
                :medical-record="dataPatientMedicalRecord.medicalResult.urinalisa"
            />

            <TableNapza
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('napza')"
                :medical-record="dataPatientMedicalRecord.medicalResult.napza"
            />

            <TableImunoserologi
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('imunoserologi')"
                :medical-record="dataPatientMedicalRecord.medicalResult.imunoserologi"
            />

            <TableMikroskopis
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('mikroskopis')"
                :medical-record="dataPatientMedicalRecord.medicalResult.mikroskopis"
            />

            <TableTCM
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('tcm')"
                :medical-record="dataPatientMedicalRecord.medicalResult.tcm"
            />

            <TableLainnya
                v-if="dataPatientMedicalRecord.medicalResult.hasOwnProperty('lainnya')"
                :medical-record="dataPatientMedicalRecord.medicalResult.lainnya"
            />
        </table>
    </section>
</template>

<style scoped>

</style>
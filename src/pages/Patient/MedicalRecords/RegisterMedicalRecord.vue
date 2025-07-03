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

function onHandleTabClick(value) {
    navTabList.list.forEach((tab) => {
        tab.active = value === tab.value;
    });

    currentNavTab.value = value;
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

            <FormHematologi v-if="currentNavTab === 'hematologi'" :form-data-patient="dataPatient" />
            <FormKimiaKlinik v-if="currentNavTab === 'kimia_klinik'" :form-data-patient="dataPatient" />
            <FormUrinalisa v-if="currentNavTab === 'urinalisa'" :form-data-patient="dataPatient" />
            <FormImunoserologi v-if="currentNavTab === 'imunoserologi'" :form-data-patient="dataPatient" />
            <FormMikroskopis v-if="currentNavTab === 'mikroskopis'" :form-data-patient="dataPatient" />
            <FormTCM v-if="currentNavTab === 'tcm'" :form-data-patient="dataPatient" />
            <FormLainnya v-if="currentNavTab === 'lainnya'" :form-data-patient="dataPatient" />
        </div>
    </section>
</template>

<style scoped>

</style>
<script setup>

import {onMounted, reactive, ref} from "vue";
import dayjs from "dayjs";
import { datePicker } from "../utils/datePickerUtil.js";
import patientMedicalRecordAPI from "../utils/api/Patient/PatientMedicalRecordAPI.js";
import {useRoute} from "vue-router";
import CheckPermissionAccess from "../utils/CheckPermissionAccess.js";

const route = useRoute();
const searchField = reactive({
    start_date: '',
    end_date: '',
});
const getPermission = ref({
    read: false,
    write: false,
    delete: false,
});

let instancePickupDatePicker = null;

function onHandleRenderDatePicker() {
    const options = {
        pickupDate: {
            dateFormat: "Y-m-d",
            altFormat: "F j, Y",
            altInput: true,
            enableTime: false,
            maxDate: "today",
            mode: 'range',
            onChange: function(selectedDates, dateStr, instance) {
                const date1 = selectedDates[0] ? dayjs(selectedDates[0]).format('YYYY-MM-DD') : '';
                const date2 = selectedDates[1] ? dayjs(selectedDates[1]).format('YYYY-MM-DD') : '';

                searchField.start_date = date1;
                searchField.end_date = date2;
            }
        },
    };

    if( instancePickupDatePicker !== null ) {
        instancePickupDatePicker.destroy();
    }

    instancePickupDatePicker = datePicker("#input-tanggal-pengambilan", options.pickupDate);
}

async function handleButtonExport() {
    const exportExcel = await patientMedicalRecordAPI.exportExcel(searchField);
    window.open(exportExcel, '_blank');
}

onMounted(async () => {
    onHandleRenderDatePicker();
});

</script>

<template>
    <section class="card-section">
        <div class="card-heading">Laporan</div>

        <div class="uk-card uk-card-default card-body">
            <form class="uk-form-stacked uk-margin-top uk-grid-small" @submit.prevent="false">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-3@m uk-width-1-2@s">
                        <label for="input-tanggal-pengambilan" class="uk-form-label form-label">Tanggal Pengambilan</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" id="input-tanggal-pengambilan" />
                        </div>
                    </div>
                </div>

                <div class="uk-margin">
                    <button @click="handleButtonExport()" class="uk-button uk-button-primary button button-primary">Export XLSX</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
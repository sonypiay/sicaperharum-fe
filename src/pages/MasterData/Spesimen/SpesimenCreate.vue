<script setup>
import { reactive } from 'vue';
import spesimenAPI from "../../../utils/api/MasterData/SpesimenAPI.js";
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRouter} from "vue-router";

const formsInput = reactive({
    nama: '',
    active: "1"
});
const router = useRouter();
const errorDetail = reactive({});

function onValidationForm() {
    errorDetail.isError = false;

    if( formsInput.nama === '' ) {
        errorDetail.nama = 'Nama wajib diisi';
        errorDetail.isError = true;
    }
}

async function onHandleSubmit() {
    onValidationForm();

    if( errorDetail.isError === false) {
        const fetchApi = await spesimenAPI.create(formsInput);

        if( fetchApi.statusCode === 201 ) {
            toastSuccess('Spesimen berhasil ditambahkan');
            await router.push('/admin/master/spesimen');
        } else {
            toastFailed(fetchApi.data.message);
        }
    }
}
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Tambah Spesimen</div>

        <div class="uk-form-stacked form-section-input">
            <form @submit.prevent="onHandleSubmit()">
                <div class="uk-margin">
                    <label for="input-nama" class="uk-form-label form-label">Nama</label>
                    <div class="uk-form-controls">
                        <input
                            class="uk-width-1-1 uk-input form-input"
                            v-model="formsInput.nama"/>
                    </div>

                    <div v-if="errorDetail.nama !== ''" class="uk-text-danger">{{ errorDetail.nama }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-active" class="uk-form-label form-label">Status</label>
                    <div class="uk-form-controls">
                        <select class="uk-select form-select" v-model="formsInput.active" aria-label="Select">
                            <option value="1">Aktif</option>
                            <option value="0">Tidak Aktif</option>
                        </select>
                    </div>
                </div>

                <div class="uk-margin">
                    <router-link :to="{ name: 'list-spesimen' }" class="uk-button uk-button-default uk-margin-small-right button button-default">
                        Kembali
                    </router-link>
                    <button class="uk-button uk-button-primary button button-primary">
                        Tambah
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
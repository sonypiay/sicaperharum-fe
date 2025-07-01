<script setup>
import {onMounted, reactive} from 'vue';
import klasterAPI from "../../../utils/api/MasterData/KlasterAPI.js";
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRoute, useRouter} from "vue-router";

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

async function fetchKlaster() {
    const route = useRoute();
    const id = route.params.id;
    const fetchApi = await klasterAPI.detail(id);
    const responseBody = fetchApi.data;

    formsInput.id = id;
    formsInput.nama = responseBody.title;
    formsInput.active = responseBody.active.value;
}

async function onHandleSubmit() {
    onValidationForm();

    if( errorDetail.isError === false) {
        const fetchApi = await klasterAPI.update(formsInput);

        if( fetchApi.statusCode === 202 ) {
            toastSuccess(`Data klaster berhasil disimpan.`);
            await router.push('/admin/master/klaster');
        } else {
            toastFailed(fetchApi.data.message);
        }
    }
}

onMounted(async () => {
    await fetchKlaster();
})
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Ubah Klaster</div>

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
                    <router-link :to="{ name: 'list-klaster' }" class="uk-button uk-button-default uk-margin-small-right button button-default">
                        Kembali
                    </router-link>
                    <button class="uk-button uk-button-primary button button-primary">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>

</style>
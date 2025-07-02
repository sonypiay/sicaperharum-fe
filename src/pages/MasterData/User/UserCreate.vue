<script setup>
import { reactive } from 'vue';
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRouter} from "vue-router";
import userAPI from "../../../utils/api/MasterData/UserAPI.js";

const formsInput = reactive({
    username: '',
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    image: null,
    active: "1"
});
const router = useRouter();
const errorDetail = reactive({});

function onValidationForm() {
    errorDetail.username = '';
    errorDetail.name = '';
    errorDetail.email = '';
    errorDetail.password = '';
    errorDetail.image = '';
    errorDetail.isError = false;

    if( formsInput.username === '' ) {
        errorDetail.username = 'Username wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.name === '' ) {
        errorDetail.name = 'Nama wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.email === '' ) {
        errorDetail.email = 'Email wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.password === '' ) {
        errorDetail.password = 'Password wajib diisi';
        errorDetail.isError = true;
    }

    if( formsInput.image ) {
        if( formsInput.image.type !== 'image/png' && formsInput.image.type !== 'image/jpeg' ) {
            errorDetail.image = 'File harus berupa gambar dengan format PNG atau JPEG';
            errorDetail.isError = true;
        }
    }
}

async function onHandleSubmit() {
    onValidationForm();

    if( errorDetail.isError === false) {
        const fetchApi = await userAPI.create(formsInput);

        if( fetchApi.statusCode === 201 ) {
            toastSuccess(`User ${formsInput.name} berhasil ditambahkan`);
            await router.push('/admin/master/user');
        } else {
            toastFailed(fetchApi.data.message);
        }
    }
}

function handleGetFiles(event) {
    const file = event.target.files[0];
    formsInput.image = file ?? null;
}
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Tambah User</div>

        <div class="uk-form-stacked form-section-input">
            <form @submit.prevent="onHandleSubmit()">
                <div class="uk-margin">
                    <label for="input-nama" class="uk-form-label form-label form-label-required">Username</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.username" maxlength="100" />
                    </div>

                    <div v-if="errorDetail.username !== ''" class="uk-text-danger">{{ errorDetail.username }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-email" class="uk-form-label form-label form-label-required">Email</label>
                    <div class="uk-form-controls">
                        <input type="email" class="uk-width-1-1 uk-input form-input" v-model="formsInput.email" maxlength="100" />
                    </div>

                    <div v-if="errorDetail.email !== ''" class="uk-text-danger">{{ errorDetail.email }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-nama" class="uk-form-label form-label form-label-required">Nama</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.name" maxlength="100" />
                    </div>

                    <div v-if="errorDetail.name !== ''" class="uk-text-danger">{{ errorDetail.name }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-password" class="uk-form-label form-label form-label-required">Password</label>
                    <div class="uk-form-controls">
                        <input type="password" class="uk-width-1-1 uk-input form-input" v-model="formsInput.password" minlength="8" />
                    </div>

                    <div v-if="errorDetail.password !== ''" class="uk-text-danger">{{ errorDetail.password }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Image</label>
                    <div class="uk-form-controls">
                        <input type="file" accept="image/*" @change="handleGetFiles($event)" />
                    </div>

                    <div v-if="errorDetail.image !== ''" class="uk-text-danger">{{ errorDetail.image }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-active" class="uk-form-label form-label form-label-required">Status</label>
                    <div class="uk-form-controls">
                        <select class="uk-select form-select" v-model="formsInput.active" aria-label="Select">
                            <option value="1">Aktif</option>
                            <option value="0">Tidak Aktif</option>
                        </select>
                    </div>
                </div>

                <div class="uk-margin">
                    <router-link :to="{ name: 'list-user' }" class="uk-button uk-button-default uk-margin-small-right button button-default">
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
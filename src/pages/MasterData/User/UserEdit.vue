<script setup>
import {onMounted, reactive} from 'vue';
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRoute, useRouter} from "vue-router";
import userAPI from "../../../utils/api/MasterData/UserAPI.js";
import {useLocalStorage} from "@vueuse/core";

const formsInput = reactive({
    username: '',
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    image: null,
    active: "1",
    oldProfileImage: {
        file: null,
        url: ''
    }
});
const router = useRouter();
const userId = useRoute().params.id;
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

    if( formsInput.image ) {
        if( formsInput.image.type !== 'image/png' && formsInput.image.type !== 'image/jpeg' ) {
            errorDetail.image = 'File harus berupa gambar dengan format PNG atau JPEG';
            errorDetail.isError = true;
        }
    }
}

async function fetchUser() {
    const fetchApi = await userAPI.detail(userId);
    const responseBody = fetchApi.data;

    formsInput.username = responseBody.username;
    formsInput.name = responseBody.name;
    formsInput.email = responseBody.email;
    formsInput.password = '';
    formsInput.confirm_password = '';
    formsInput.image = null;
    formsInput.active = responseBody.active;
    formsInput.oldProfileImage = responseBody.image;
}

async function onHandleSubmit() {
    onValidationForm();

    if( errorDetail.isError === false) {
        const fetchApi = await userAPI.update(userId, formsInput);

        if( fetchApi.statusCode === 202 ) {
            const userProfile = JSON.parse(useLocalStorage('user_profile').value ?? '{}');

            if( userProfile.id === parseInt(userId) ) {
                const fetchApi = await userAPI.detail(userId);
                const responseBody = fetchApi.data;

                localStorage.setItem('user_profile', JSON.stringify({
                    id: responseBody.id,
                    username: responseBody.username,
                    name: responseBody.name,
                    email: responseBody.email,
                    image: responseBody.image
                }));
            }

            toastSuccess(`Data user berhasil disimpan.`);
            await router.push({ name: 'list-user' });
        } else {
            toastFailed(fetchApi.data.message);
        }
    }
}

function handleGetFiles(event) {
    const file = event.target.files[0];
    formsInput.image = file ?? null;
}

onMounted(async () => {
    await fetchUser();
});
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Ubah User</div>

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
                    <label for="input-password" class="uk-form-label form-label">Password</label>
                    <div class="uk-form-controls">
                        <input type="password" class="uk-width-1-1 uk-input form-input" v-model="formsInput.password" minlength="8" />
                    </div>

                    <div v-if="errorDetail.password !== ''" class="uk-text-danger">{{ errorDetail.password }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Image</label>

                    <div class="uk-width-1-4 uk-margin-bottom" v-if="formsInput.oldProfileImage.file">
                        <img class="uk-width-1-2" :src="formsInput.oldProfileImage.url" />
                    </div>

                    <div class="uk-form-controls">
                        <input type="file" accept="image/*" @change="handleGetFiles($event)" />
                    </div>

                    <div v-if="errorDetail.image !== ''" class="uk-text-danger">{{ errorDetail.image }}</div>
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
                    <router-link :to="{ name: 'list-user' }" class="uk-button uk-button-default uk-margin-small-right button button-default">
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
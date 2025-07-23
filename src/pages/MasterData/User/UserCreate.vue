<script setup>
import {onMounted, reactive, ref} from 'vue';
import {toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRouter} from "vue-router";
import userAPI from "../../../utils/api/MasterData/UserAPI.js";

const formsInput = reactive({
    username: '',
    name: '',
    email: '',
    password: '',
    profile_image: {
        file: null,
        url: ''
    },
    active: "1",
    gelar: '',
    role: '',
    signature: {
        file: null,
        url: ''
    },
});
const router = useRouter();
const errorDetail = reactive({});
const roleList = ref([]);

function onValidationForm() {
    errorDetail.username = '';
    errorDetail.name = '';
    errorDetail.email = '';
    errorDetail.password = '';
    errorDetail.profile_image = '';
    errorDetail.signature = '';
    errorDetail.gelar = '';
    errorDetail.role = '';
    errorDetail.isError = false;

    if( formsInput.role === '' ) {
        errorDetail.role = 'Role wajib diisi';
        errorDetail.isError = true;
    }

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

    if( formsInput.profile_image.file !== null ) {
        if( formsInput.profile_image.file.type !== 'image/png' && formsInput.profile_image.file.type !== 'image/jpeg' ) {
            errorDetail.profile_image = 'File harus berupa gambar dengan format PNG atau JPEG';
            errorDetail.isError = true;
        }
    }

    if( formsInput.signature.file !== null ) {
        if( formsInput.signature.file.type !== 'image/png' && formsInput.signature.file.type !== 'image/jpeg' ) {
            errorDetail.signature = 'File harus berupa gambar dengan format PNG atau JPEG';
            errorDetail.isError = true;
        }
    }

    if( formsInput.gelar === '' ) {
        errorDetail.gelar = 'Gelar wajib diisi';
        errorDetail.isError = true;
    }
}

async function fetchRoles() {
    const fetchApi = await userAPI.getAllRole();
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        roleList.value = responseBody;
    } else {
        toastFailed(fetchApi.data.message);
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

function handleGetFiles(event, propName) {
    if( propName ) {
        const file = event.target.files[0];

        if( file ) {
            if( formsInput[propName].url ) {
                URL.revokeObjectURL(formsInput[propName].url);
            }

            formsInput[propName].file = file ?? null;
            formsInput[propName].url = URL.createObjectURL(file);
        }
    }
}

function handleRemovePreviewImage(propName) {
    if( propName ) {
        if( formsInput[propName].url ) {
            URL.revokeObjectURL(formsInput[propName].url);
        }

        formsInput[propName].file = null;
        formsInput[propName].url = '';

        const formInput = document.querySelector(`#input-form-${propName}`);
        formInput.value = '';
        formInput.dispatchEvent(new Event('change'));
    }
}

onMounted(async () => {
    await fetchRoles();
})
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Tambah User</div>

        <div class="uk-form-stacked form-section-input">
            <form @submit.prevent="onHandleSubmit()">
                <div class="uk-margin">
                    <label for="input-active" class="uk-form-label form-label form-label-required">Hak Akses</label>
                    <div class="uk-form-controls">
                        <select class="uk-select form-select" v-model="formsInput.role" aria-label="Select">
                            <option value="">Pilih Hak Akses</option>
                            <option v-for="role in roleList" :key="role.code" :value="role.code">{{ role.name }}</option>
                        </select>
                    </div>

                    <div v-if="errorDetail.role !== ''" class="uk-text-danger">{{ errorDetail.role }}</div>
                </div>

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
                    <label for="input-gelar" class="uk-form-label form-label form-label-required">Gelar</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-width-1-1 uk-input form-input" v-model="formsInput.gelar" maxlength="100" />
                    </div>

                    <div v-if="errorDetail.gelar !== ''" class="uk-text-danger">{{ errorDetail.gelar }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-password" class="uk-form-label form-label form-label-required">Password</label>
                    <div class="uk-form-controls">
                        <input type="password" class="uk-width-1-1 uk-input form-input" v-model="formsInput.password" minlength="8" />
                    </div>

                    <div v-if="errorDetail.password !== ''" class="uk-text-danger">{{ errorDetail.password }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Upload Foto Profil</label>

                    <div class="form-image-preview" v-if="formsInput.profile_image.url">
                        <span v-if="formsInput.profile_image.url === ''">Preview</span>
                        <img v-else :src="formsInput.profile_image.url" alt="Preview" />
                    </div>

                    <div v-if="formsInput.profile_image.url" class="uk-margin-small">
                        <a @click="handleRemovePreviewImage('profile_image')" class="uk-button uk-button-primary uk-button-small button button-danger">
                            <span class="las la-times"></span> Hapus
                        </a>
                    </div>

                    <div class="uk-form-controls">
                        <input type="file" accept="image/*" id="input-form-profile_image" @change="handleGetFiles($event, 'profile_image')" />
                    </div>

                    <div class="uk-text-small form-text-info">Format file yang diperbolehkan: PNG, JPEG.</div>

                    <div v-if="errorDetail.profile_image !== ''" class="uk-text-danger">{{ errorDetail.profile_image }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Upload Tanda Tangan</label>
                    <div class="form-image-preview" v-if="formsInput.signature.url">
                        <span v-if="formsInput.signature.url === ''">Preview</span>
                        <img v-else :src="formsInput.signature.url" alt="Preview" />
                    </div>

                    <div v-if="formsInput.signature.url" class="uk-margin-small">
                        <a @click="handleRemovePreviewImage('signature')" class="uk-button uk-button-primary uk-button-small button button-danger">
                            <span class="las la-times"></span> Hapus
                        </a>
                    </div>

                    <div class="uk-form-controls">
                        <input type="file" accept="image/*" id="input-form-signature" @change="handleGetFiles($event, 'signature')" />
                    </div>

                    <div class="uk-text-small form-text-info">Format file yang diperbolehkan: PNG, JPEG.</div>

                    <div v-if="errorDetail.signature !== ''" class="uk-text-danger">{{ errorDetail.signature }}</div>
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
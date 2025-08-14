<script setup>
import {onMounted, reactive, ref} from 'vue';
import {alertConfirm, toastFailed, toastSuccess} from "../../../utils/alerts.js";
import {useRoute, useRouter} from "vue-router";
import userAPI from "../../../utils/api/MasterData/UserAPI.js";
import {useLocalStorage} from "@vueuse/core";
import ImageHelper from "../../../utils/ImageHelper.js";

const formsInput = reactive({
    username: '',
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    profile_image: {
        file: null,
        url: ''
    },
    active: "1",
    signature: {
        file: null,
        url: ''
    },
    oldProfileImage: {
        file: null,
        url: ''
    },
    oldSignature: {
        file: null,
        url: '',
    },
    gelar: '',
    role: '',
});
const router = useRouter();
const userId = useRoute().params.id;
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

    console.log(typeof formsInput.profile_image.file);
    console.log(typeof formsInput.signature.file);

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

async function fetchUser() {
    const fetchApi = await userAPI.detail(userId);
    const responseBody = fetchApi.data;

    formsInput.username = responseBody.username ?? '';
    formsInput.name = responseBody.name ?? '';
    formsInput.email = responseBody.email ?? '';
    formsInput.password = '';
    formsInput.active = responseBody.active;
    formsInput.oldProfileImage = responseBody.image ?? '';
    formsInput.oldSignature = responseBody.signature ?? '';
    formsInput.gelar = responseBody.gelar ?? '';
    formsInput.role = responseBody.role.code ?? '';
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
                    image: responseBody.image,
                    gelar: responseBody.gelar,
                    role: {
                        code: responseBody.role.code,
                        name: responseBody.role.name,
                    }
                }));
            }

            toastSuccess(`Data user berhasil disimpan.`);
            await router.push({ name: 'list-user' });
        } else {
            toastFailed(fetchApi.data.message);
        }
    }
}

function handleGetFiles(event, propName) {
    if( propName ) {
        formsInput[propName] = ImageHelper.getFile(event, propName);
    }
}

function handleRemovePreviewImage(propName) {
    if( propName ) {
        if( formsInput[propName].url ) {
            URL.revokeObjectURL(formsInput[propName].url);
        }

        const element = `#input-form-${propName}`;
        formsInput[propName] = ImageHelper.removeFile(element);
    }
}

async function handleDeleteSignature() {
    const confirmAction = await alertConfirm("Konfirmasi", "Apakah anda yakin ingin menghapus tanda tangan ini?");

    if( confirmAction ) {
        const fetchApi = await userAPI.deleteSignature(userId);
        const statusCode = fetchApi.statusCode;

        if( statusCode === 202 ) {
            toastSuccess(`Tanda tangan berhasil dihapus.`);

            formsInput.oldSignature = {
                file: null,
                url: ''
            };
        } else {
            toastFailed("Gagal menghapus tanda tangan. Silahkan coba lagi nanti.");
        }
    }
}

onMounted(async () => {
    await fetchRoles();
    await fetchUser();
});
</script>

<template>
    <section class="form-section">
        <div class="form-header-title">Ubah User</div>

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
                    <label for="input-password" class="uk-form-label form-label">Password</label>
                    <div class="uk-form-controls">
                        <input type="password" class="uk-width-1-1 uk-input form-input" v-model="formsInput.password" minlength="8" />
                    </div>

                    <div v-if="errorDetail.password !== ''" class="uk-text-danger">{{ errorDetail.password }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Upload Foto Profil</label>

                    <div v-if="formsInput.profile_image.url">
                        <div class="form-image-preview" v-if="formsInput.profile_image.url">
                            <span v-if="formsInput.profile_image.url === ''">Preview</span>
                            <img v-else :src="formsInput.profile_image.url" alt="Preview" />
                        </div>

                        <div v-if="formsInput.profile_image.url" class="uk-margin-small">
                            <a @click="handleRemovePreviewImage('profile_image')" class="uk-button uk-button-primary uk-button-small button button-danger">
                                <span class="las la-times"></span> Hapus
                            </a>
                        </div>
                    </div>

                    <div v-else>
                        <div class="form-image-preview" v-if="formsInput.oldProfileImage.file">
                            <img :src="formsInput.oldProfileImage.url" />
                        </div>
                    </div>

                    <div class="uk-form-controls">
                        <input type="file" id="input-form-profile_image" accept="image/*" @change="handleGetFiles($event, 'profile_image')" />
                    </div>

                    <div class="uk-text-small form-text-info">Format file yang diperbolehkan: PNG, JPEG.</div>

                    <div v-if="errorDetail.profile_image !== ''" class="uk-text-danger">{{ errorDetail.profile_image }}</div>
                </div>

                <div class="uk-margin">
                    <label for="input-image" class="uk-form-label form-label">Upload Tanda Tangan</label>

                    <div v-if="formsInput.signature.url">
                        <div class="form-image-preview" v-if="formsInput.signature.url">
                            <span v-if="formsInput.signature.url === ''">Preview</span>
                            <img v-else :src="formsInput.signature.url" alt="Preview" />
                        </div>

                        <div v-if="formsInput.signature.url" class="uk-margin-small">
                            <a @click="handleRemovePreviewImage('signature')" class="uk-button uk-button-primary uk-button-small button button-danger">
                                <span class="las la-times"></span> Hapus
                            </a>
                        </div>
                    </div>

                    <div v-else>
                        <div class="form-image-preview" v-if="formsInput.oldSignature.file">
                            <img :src="formsInput.oldSignature.url" />
                        </div>

                        <a v-if="formsInput.oldSignature.file" @click="handleDeleteSignature()" class="uk-button uk-button-danger uk-button-small button button-danger">
                            <span class="las la-trash-o"></span> Hapus
                        </a>
                    </div>

                    <div class="uk-form-controls">
                        <input type="file" id="input-form-signature" accept="image/*" @change="handleGetFiles($event, 'signature')" />
                    </div>

                    <div class="uk-text-small form-text-info">Format file yang diperbolehkan: PNG, JPEG. Ukuran yang disarankan 450 x 260</div>

                    <div v-if="errorDetail.signature !== ''" class="uk-text-danger">{{ errorDetail.signature }}</div>
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
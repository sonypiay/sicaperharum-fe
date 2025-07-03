<script setup>

import {useRouter} from "vue-router";
import {onBeforeMount, reactive, ref} from "vue";
import klasterAPI from "../../../utils/api/MasterData/KlasterAPI.js";
import dayjs from "dayjs";

const router = useRouter();
const searchField = reactive({
    title: ''
});

const dataKlaster = ref([]);
const isSearchEnable = ref(false);

async function fetchKlaster() {
    const fetchApi = await klasterAPI.getAll(searchField);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataKlaster.value = responseBody;
    }
}

function handleToggleSearch() {
    isSearchEnable.value = !isSearchEnable.value;
}

async function handleSearch() {
    await fetchKlaster();
}

onBeforeMount(async () => {
    await fetchKlaster();
});

</script>

<template>
    <section class="card-section">
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-expand">
                <div class="card-heading">Daftar Klaster</div>
            </div>
            <div class="uk-width-1-5">
                <div class="uk-flex uk-flex-right">
                    <router-link :to="{name: 'create-klaster'}" class="uk-button uk-button-primary button button-primary">
                        Tambah
                    </router-link>
                </div>
            </div>
        </div>

        <div class="uk-card uk-card-default card-body">
            <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-6">
                    <div class="card-subheading">
                        <span class="las la-search"></span> Cari
                    </div>
                </div>
                <div class="uk-width-expand">
                    <div class="uk-text-right">
                        <a href="#" @click="handleToggleSearch()">
                            <span v-if="isSearchEnable" class="las la-angle-down search-toggle-card"></span>
                            <span v-else class="las la-angle-up search-toggle-card"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="uk-width-1-3" v-if="isSearchEnable === true">
                <form class="uk-form-stacked uk-margin-top" @submit.prevent="handleSearch()">
                    <div class="uk-margin">
                        <label class="uk-form-label form-label">Nama</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.title" placeholder="Cari berdasarkan nama" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary button button-primary">Cari</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="uk-card uk-card-default card-body">
            <table class="uk-table uk-table-divider uk-table-striped uk-table-small table">
                <thead>
                    <tr>
                        <th>Aksi</th>
                        <th>Nama</th>
                        <th>Aktif</th>
                        <th>Terakhir diubah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in dataKlaster" :key="data.id">
                        <td>
                            <router-link :to="{name: 'edit-klaster', params: { id: data.id }}" class="uk-button uk-button-small uk-button-primary button button-primary">
                                <span class="las la-edit"></span> Ubah
                            </router-link>
                        </td>
                        <td>{{ data.title }}</td>
                        <td>
                            <span v-if="data.active.value === 1" class="label label-green">{{ data.active.label }}</span>
                            <span v-else class="label label-red">{{ data.active.label }}</span>
                        </td>
                        <td>
                            {{ dayjs(data.updated_at).format('DD MMMM YYYY HH:mm') }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<style scoped>

</style>
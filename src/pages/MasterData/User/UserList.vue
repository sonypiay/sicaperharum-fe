<script setup>

import {useRouter} from "vue-router";
import {onBeforeMount, reactive, ref} from "vue";
import userAPI from "../../../utils/api/MasterData/UserAPI.js";
import dayjs from "dayjs";

const router = useRouter();
const searchField = reactive({
    name: '',
    email: '',
    page: 1,
});

const dataUser = reactive({
    data: [],
    pagination: {
        first: 1,
        prev_page: null,
        next_page: null,
        current_page: 1,
        last: 1,
        total: 0,
        per_page: 1,
        from: 1,
        to: 1,
    },
});
const isSearchEnable = ref(true);

async function fetchUser(page) {
    const fetchApi = await userAPI.getAll(searchField, page);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataUser.data = responseBody.data;
        dataUser.pagination = responseBody.pagination;
    }
}

function handleToggleSearch() {
    isSearchEnable.value = !isSearchEnable.value;
}

async function handleSearch() {
    await fetchUser();
}

async function handlePageChange(page) {
    await fetchUser(page);
}

onBeforeMount(async () => {
    await fetchUser();
});

</script>

<template>
    <section class="card-section">
        <div class="uk-grid-small" uk-grid>
            <div class="uk-width-expand">
                <div class="card-heading">Daftar User</div>
            </div>
            <div class="uk-width-1-5">
                <div class="uk-flex uk-flex-right">
                    <router-link :to="{name: 'create-user'}" class="uk-button uk-button-primary button button-primary">
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
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.name" placeholder="Cari berdasarkan nama" />
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label class="uk-form-label form-label">Email</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1 uk-input form-input" v-model="searchField.email" placeholder="Cari berdasarkan email" />
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
                    <th>Email</th>
                    <th>Aktif</th>
                    <th>Terakhir diubah</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in dataUser.data" :key="data.id">
                    <td>
                        <router-link :to="{name: 'edit-user', params: { id: data.id }}" class="uk-button uk-button-small uk-button-primary button button-primary">
                            <span class="las la-edit"></span> Ubah
                        </router-link>
                    </td>
                    <td>{{ data.name }}</td>
                    <td>{{ data.email }}</td>
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

            <div class="uk-flex uk-flex-center">
                <ul class="uk-pagination nav-pagination">
                    <li :class="{
                            'disabled': dataUser.pagination.prev_page === null
                        }">
                        <a @click="handlePageChange(dataUser.pagination.prev_page)">
                            <span class="las la-arrow-left"></span> Previous Page
                        </a>
                    </li>
                    <li class="uk-disabled">
                        <span>Page {{ dataUser.pagination.current_page  }} of {{ dataUser.pagination.last }}</span>
                    </li>
                    <li :class="{
                            'disabled': dataUser.pagination.next_page === null
                        }">
                        <a @click="handlePageChange(dataUser.pagination.next_page)">
                            Next Page <span class="las la-arrow-right"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
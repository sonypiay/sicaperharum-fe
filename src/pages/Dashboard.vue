<script setup>

import {onMounted, reactive} from "vue";
import dashboardAPI from "../utils/api/DashboardAPI.js";
import {toastFailed} from "../utils/alerts.js";
import dayjs from "dayjs";
import BarChart from "../components/Chart/BarChart.vue";

const dataSummaryVisitor = reactive({
    total_harian: 0,
    total_bulanan: 0,
    total_tahunan: 0,
    total_all: 0,
    date: '',
});

const dataTotalVisitorByYear = reactive({
    year: dayjs().format('YYYY'),
    total: [],
    isFetchChart: false,
})

async function fetchSummaryVisitor() {
    const fetchApi = await dashboardAPI.totalSummaryVisitor(dataSummaryVisitor.date);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataSummaryVisitor.total_harian = responseBody.total_harian;
        dataSummaryVisitor.total_bulanan = responseBody.total_bulanan;
        dataSummaryVisitor.total_tahunan = responseBody.total_tahunan;
        dataSummaryVisitor.total_all = responseBody.total_all;
    } else {
        toastFailed("Gagal mengambil data summary visitor.");
    }
}

async function fetchTotalVisitorByYear() {
    const fetchApi = await dashboardAPI.totalVisitorByYear(dataTotalVisitorByYear.year);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    dataTotalVisitorByYear.isFetchChart = false;

    if( statusCode === 200 ) {
        dataTotalVisitorByYear.total = responseBody.total;
    }

    dataTotalVisitorByYear.isFetchChart = true;
}

async function handleChangeGraphVisitor() {
    dataTotalVisitorByYear.isFetchChart = false;
    await fetchTotalVisitorByYear();
}

onMounted(async () => {
    await fetchSummaryVisitor();
    await fetchTotalVisitorByYear();
});
</script>

<template>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <div class="title">Dashboard Overview</div>
            <div class="subtitle">Selamat datang di Sicaperharum</div>
        </div>

        <div class="card-summary-visitor">
            <div class="heading">Report Kunjungan</div>
            <div class="uk-grid-small uk-grid-divider" uk-grid>
                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Total</div>
                        <div class="desc">{{ dataSummaryVisitor.total_tahunan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Tahunan</div>
                        <div class="desc">{{ dataSummaryVisitor.total_tahunan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Bulanan</div>
                        <div class="desc">{{ dataSummaryVisitor.total_bulanan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Harian</div>
                        <div class="desc">{{ dataSummaryVisitor.total_harian }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="uk-margin-large-top card-summary-visitor">
            <div class="uk-flex uk-flex-between">
                <div class="heading">Grafik Kunjungan Tahunan</div>
                <div class="uk-width-1-5@m uk-width-1-1@s">
                    <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="dataTotalVisitorByYear.year" @change="handleChangeGraphVisitor()">
                        <option v-for="year in 5" :key="year" :value="year + 2020">{{ year + 2020 }}</option>
                    </select>
                </div>
            </div>

            <div class="uk-width-1-1">
                {{ dataTotalVisitorByYear.isFetchChart }}
                <div class="uk-card uk-card-body uk-text-center" v-if="dataTotalVisitorByYear.isFetchChart === false">
                    <span uk-spinner></span> Loading ...
                </div>

                <BarChart v-if="dataTotalVisitorByYear.isFetchChart === true" :data-sets="dataTotalVisitorByYear.total" />
            </div>
        </div>
    </div>
</template>